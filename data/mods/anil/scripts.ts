export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: "gen9",
	init() {
		// 1. Habilitar Mega Piedras y Orbes Primigenios
		for (const i in this.data.Items) {
			const item = this.modData("Items", i) as any;
			if (item.megaStone || item.isPrimalOrb) {
				item.isNonstandard = null;
			}
		}

		// 2. Registro de Megas (Gmax y especiales)
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
			"jumpluff",
		];

		for (const id of gmaxToMega) {
			const species = pokedex(id);
			if (species) species.megaEvolves = `${species.name}-Gmax`;
		}

		const jumpluff = pokedex("jumpluff");
		if (jumpluff) jumpluff.megaEvolves = "Jumpluff-Mega";
	},

	actions: {
		canMegaEvo(pokemon) {
			const species = pokemon.baseSpecies;
			const item = pokemon.getItem();

			// Lógica para Rayquaza (vía movimiento Ascenso Draco)
			const altForme =
				species.otherFormes && this.dex.species.get(species.otherFormes[0]);
			if (
				altForme?.isMega &&
				altForme?.requiredMove &&
				pokemon.baseMoves.includes(this.battle.toID(altForme.requiredMove))
			) {
				return altForme.name;
			}

			if (!item.megaStone) return null;
			return item.megaStone[species.name] || null;
		},

		runMegaEvo(pokemon) {
			const speciesid = pokemon.canMegaEvo || pokemon.canUltraBurst;
			if (!speciesid) return false;

			// Al ejecutar el cambio, Showdown usa la habilidad del pokedex.ts del mod
			pokemon.formeChange(speciesid, pokemon.getItem(), true);

			// Fix visual para Jumpluff
			if (pokemon.species.id === "jumpluffmega") {
				pokemon.formeChange(
					"jumpluff",
					this.dex.conditions.get("megaevolution"),
					true,
				);
			}

			// Consumir la Mega del equipo
			for (const ally of pokemon.side.pokemon) {
				ally.canMegaEvo = false;
				ally.canUltraBurst = null;
			}

			this.battle.runEvent("AfterMega", pokemon);
			return true;
		},
	},
};
