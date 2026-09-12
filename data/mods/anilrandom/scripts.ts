import path = require("path");

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: "gen9",
	init() {
		for (const i in this.data.Items) {
			const item = this.modData("Items", i) as any;
			if (item.megaStone || item.isPrimalOrb) {
				item.isNonstandard = null;
			}
		}

		const pokedex = (id: string) => this.modData("Pokedex", id) as any;

		const gmaxToMega = [
			"pikachustarter",
			"eeveestarter",
			"inteleon",
			"corviknight",
			"venusaur",
			"duraludon",
			"copperajah",
			"alcremie",
			"grimmsnarl",
			"hatterene",
			"centiskorch",
			"toxtricity",
			"toxtricitylowkey",
			"sandaconda",
			"appletun",
			"flapple",
			"coalossal",
			"drednaw",
			"orbeetle",
			"blastoise",
			"machamp",
			"gengar",
			"kingler",
			"lapras",
			"snorlax",
			"garbodor",
			"rillaboom",
			"cinderace",
		];
		for (const id of gmaxToMega) {
			if (pokedex(id)) pokedex(id).megaEvolves = `${pokedex(id).name}-Gmax`;
		}
		pokedex("jumpluff").megaEvolves = "Jumpluff-Mega";

		const customForms = [
			"zaciancrowned",
			"zamazentacrowned",
			"groudonprimal",
			"kyogreprimal",
		];

		for (const id of customForms) {
			this.modData("Pokedex", id).onSwitchIn = function (pokemon: Pokemon) {
				const ownerId = pokemon.battle.toID(pokemon.side.name);

				try {
					// Corregimos la ruta: subimos 4 niveles para salir de dist/data/mods/anilrandom
					// y luego entramos en la carpeta Custom Scripts de la raíz
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
				} catch (err: any) {
					// console.log("Error cargando JSON:", err.message);
				}
			};
		}
	},
	actions: {
		canMegaEvo(pokemon) {
			const species = pokemon.baseSpecies;
			const altForme =
				species.otherFormes && this.dex.species.get(species.otherFormes[0]);
			const item = pokemon.getItem();
			if (
				altForme?.isMega &&
				altForme?.requiredMove &&
				pokemon.baseMoves.includes(this.battle.toID(altForme.requiredMove))
			) {
				return altForme.name;
			}
			if (!item.megaStone) return null;
			return item.megaStone[species.name];
		},

		runMegaEvo(pokemon) {
			const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
			if (!speciesid) return false;
			const baseAbility = pokemon.getAbility().id;
			// 1. Determinar si el Pokémon base está usando su Hidden Ability según el JSON
			const ownerId = this.battle.toID(pokemon.side.name);
			const baseSpeciesId = pokemon.species.id;
			let isUsingHidden = false;
			try {
				const jsonPath = path.resolve(
					__dirname,
					"../../../../Custom Scripts/Transform Anil Saves/JSON",
					`${ownerId}.json`,
				);
				delete require.cache[jsonPath];
				const userData = require(jsonPath);
				const basePokeData = userData[baseSpeciesId];
				if (basePokeData?.hidden) {
					// Comparamos la habilidad base real del pokemon con la definida como hidden en el JSON
					if (baseAbility === basePokeData.hidden) {
						isUsingHidden = true;
					}
				}
			} catch (e) {}
			// 2. Cambio de forma
			pokemon.formeChange(speciesid, pokemon.getItem(), true);
			// 3. Asignar la nueva habilidad de forma persistente
			let newAbilityId = pokemon.species.abilities[0]; // Fallback Base 0
			try {
				const jsonPath = path.resolve(
					__dirname,
					"../../../../Custom Scripts/Transform Anil Saves/JSON",
					`${ownerId}.json`,
				);
				const userData = require(jsonPath);
				const megaPokeData = userData[pokemon.species.id];
				if (megaPokeData) {
					if (isUsingHidden && megaPokeData.hidden) {
						newAbilityId = megaPokeData.hidden;
					} else if (megaPokeData.base?.[0]) {
						newAbilityId = megaPokeData.base[0];
					}
				}
			} catch (e) {}

			if (newAbilityId) {
				const ability = this.dex.abilities.get(newAbilityId);
				// Actualizamos la habilidad base para que persista al entrar/salir
				pokemon.baseAbility = ability.id;
				// Seteamos la habilidad actual de forma silenciosa (sin anuncios al rival)
				pokemon.setAbility(ability, pokemon, null, true);
			}

			// Lógica especial para Jumpluff
			// if (pokemon.species.id === "jumpluffmega") {
			// 	const megaEvolutionEffect =
			// 		this.dex.conditions.get("megaevolution");
			// 	// pokemon.formeChange("jumpluff", megaEvolutionEffect, true);
			// }

			// 4. Bloqueo de múltiples megas
			const wasMega = pokemon.canMegaEvo;
			for (const ally of pokemon.side.pokemon) {
				if (wasMega) ally.canMegaEvo = false;
				else ally.canUltraBurst = null;
			}

			this.battle.runEvent("AfterMega", pokemon);
			return true;
		},
	},
};
