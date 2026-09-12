import path = require("path");

const newMegas = ["delphoxz", "chesnaughtz", "greninja", "greninjaz", "raichuz", "entei", "volcarona", "florges"];
const gmaxToMega = [
	"pikachustarter", "inteleon", "corviknight", "venusaur", "duraludon",
	"copperajah", "alcremie", "grimmsnarl", "hatterene", "centiskorch",
	"toxtricity", "toxtricitylowkey", "sandaconda", "appletun", "flapple",
	"coalossal", "drednaw", "orbeetle", "blastoise", "machamp",
	"kingler", "lapras", "snorlax", "garbodor", "rillaboom",
	"cinderace", "hydrapple",
];

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: "gen9",
	init() {
		// Habilitamos megapiedras y formatos en el inicio del servidor
		for (const i in this.data.Items) {
			const item = this.modData("Items", i) as any;
			if (item.megaStone || item.isPrimalOrb) {
				item.isNonstandard = null;
			}
		}

		const pokedex = (id: string) => this.modData("Pokedex", id) as any;

		for (const id of gmaxToMega) {
			if (pokedex(id)) pokedex(id).megaEvolves = `${pokedex(id).name}-Gmax`;
		}

		const customForms = [
			"zaciancrowned", "zamazentacrowned", "groudonprimal", "kyogreprimal",
		];

		for (const id of customForms) {
			if (this.modData("Pokedex", id)) {
				this.modData("Pokedex", id).onSwitchIn = function (pokemon: Pokemon) {
					const ownerId = pokemon.battle.toID(pokemon.side.name);
					try {
						const jsonPath = path.resolve(
							__dirname,
							"../../../../Custom Scripts/Transform Anil Saves/JSON",
							`${ownerId}.json`,
						);
						delete require.cache[jsonPath];
						const userData = require(jsonPath);

						const pokeData = userData[pokemon.species.id];
						if (pokeData?.base?.[0]) {
							pokemon.setAbility(pokeData.base[0], pokemon, null, true);
						}
					} catch (err: any) {}
				};
			}
		}
	},
	actions: {
		canTerastallize(pokemon) {
			return null; // Bloquea Teracristalización si se desea comportamiento nativo National Dex
		},
		canMegaEvo(pokemon: Pokemon) {
			if (pokemon.species.isMega) return null;
			
			const species = pokemon.baseSpecies;
			const item = pokemon.getItem();
			
			// Soporte para Rayquaza / Movimientos requeridos usando la Dex interna de Showdown
			const altForme = species.otherFormes && this.dex.species.get(species.otherFormes[0]);
			if (altForme?.isMega && altForme?.requiredMove && pokemon.baseMoves.includes(this.dex.toID(altForme.requiredMove))) {
				return altForme.name;
			}
			
			if (!item.megaStone) return null;
			return item.megaStone[species.name] || null;
		},
		runMegaEvo(pokemon) {
			if (pokemon.species.isMega) return false;
			const speciesid = pokemon.canMegaEvo;
			if (!speciesid) return false;

			// Obtenemos la plantilla completa mapeada en el pokedex.ts de tu mod
			const megaSpecies = this.dex.species.get(speciesid);
			
			// Clonamos profundamente la especie para saltarnos las restricciones de herencia de Gen 9
			const rawSpecies = this.dex.deepClone(megaSpecies);

            // FORZAMOS EL CAMBIO DE NOMBRE EN LA INTERFAZ:
			// Asignamos el nombre de la Mega al plano del Pokémon antes de transformarlo
			rawSpecies.baseSpecies = megaSpecies.name;
			rawSpecies.name = megaSpecies.name;
			rawSpecies.fullname = 'pokemon: ' + megaSpecies.name;
			// Forzamos al Pokémon a cambiar de forma usando el clon mutado de Mix and Mega
			pokemon.formeChange(rawSpecies, pokemon.getItem(), true);
            pokemon.details = pokemon.getUpdatedDetails();
			
			// Sincronizamos de forma manual los stats numéricos de combate del motor de Showdown

			// Enviamos de forma manual el paquete visual de animación al cliente web (-mega)
			const apparentSpecies = pokemon.illusion ? pokemon.illusion.species.name : rawSpecies.baseSpecies;
			this.battle.add('-mega', pokemon, apparentSpecies, rawSpecies.requiredItem);

			// Consumimos la Mega del equipo
			for (const ally of pokemon.side.pokemon) {
				ally.canMegaEvo = false;
				ally.canUltraBurst = null;
			}

			this.battle.runEvent("AfterMega", pokemon);
			return true;
		},
	},
};