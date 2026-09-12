import { ModdedItemData } from "../../../sim/dex-items";

export const Items: { [k: string]: ModdedItemData } = {
	//CUSTOM ITEMS
	supereviolite: {
		name: "Supereviolite",
		spritenum: 130,
		fling: {
			basePower: 40,
		},
		onModifyAtkPriority: 2,
		onModifyAtk(atk, pokemon) {
			if (
				pokemon.baseSpecies.evos?.some(
					(evo) => this.dex.species.get(evo).evos?.length,
				)
			) {
				return this.chainModify(1.5);
			}
		},
		onModifyDefPriority: 2,
		onModifyDef(def, pokemon) {
			if (
				pokemon.baseSpecies.evos?.some(
					(evo) => this.dex.species.get(evo).evos?.length,
				)
			) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 2,
		onModifySpA(spa, pokemon) {
			if (
				pokemon.baseSpecies.evos?.some(
					(evo) => this.dex.species.get(evo).evos?.length,
				)
			) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD(spd, pokemon) {
			if (
				pokemon.baseSpecies.evos?.some(
					(evo) => this.dex.species.get(evo).evos?.length,
				)
			) {
				return this.chainModify(1.5);
			}
		},
		onModifySpePriority: 2,
		onModifySpe(spe, pokemon) {
			if (
				pokemon.baseSpecies.evos?.some(
					(evo) => this.dex.species.get(evo).evos?.length,
				)
			) {
				return this.chainModify(1.5);
			}
		},
		num: -3,
		gen: 9,
	},
	butterfrite: {
		name: "Butterfrite",
		spritenum: 578,
		megaStone: { Butterfree: "Butterfree-Gmax" },
		itemUser: ["Butterfree"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -4,
		gen: 9,
	},
	machampite: {
		name: "Machampite",
		spritenum: 578,
		megaStone: { Machamp: "Machamp-Gmax" },
		itemUser: ["Machamp"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -5,
		gen: 9,
	},
	kinglerite: {
		name: "Kinglerite",
		spritenum: 578,
		megaStone: { Kingler: "Kingler-Gmax" },
		itemUser: ["Kingler"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -6,
		gen: 9,
	},
	laprasite: {
		name: "Laprasite",
		spritenum: 578,
		megaStone: { Lapras: "Lapras-Gmax" },
		itemUser: ["Lapras"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -7,
		gen: 9,
	},
	snorlaxite: {
		name: "Snorlaxite",
		spritenum: 578,
		megaStone: { Snorlax: "Snorlax-Gmax" },
		itemUser: ["Snorlax"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -8,
		gen: 9,
	},
	garbodorite: {
		name: "Garbodorite",
		spritenum: 578,
		megaStone: { Garbodor: "Garbodor-Gmax" },
		itemUser: ["Garbodor"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -9,
		gen: 9,
	},
	corviknightite: {
		name: "Corviknightite",
		spritenum: 578,
		megaStone: { Corviknight: "Corviknight-Gmax" },
		itemUser: ["Corviknight"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -10,
		gen: 9,
	},
	orbeetleite: {
		name: "Orbeetleite",
		spritenum: 578,
		megaStone: { Orbeetle: "Orbeetle-Gmax" },
		itemUser: ["Orbeetle"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -11,
		gen: 9,
	},
	drednawite: {
		name: "Drednawita",
		spritenum: 578,
		megaStone: { Drednaw: "Drednaw-Gmax" },
		itemUser: ["Drednaw"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -12,
		gen: 9,
	},
	coalossalite: {
		name: "Coalossalite",
		spritenum: 578,
		megaStone: { Coalossal: "Coalossal-Gmax" },
		itemUser: ["Coalossal"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -13,
		gen: 9,
	},
	flappletunite: {
		name: "Flappletunite",
		spritenum: 578,
		megaStone: { Flapple: "Flapple-Gmax", Appletun: "Appletun-Gmax" },
		itemUser: ["Flapple", "Appletun"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -14,
		gen: 9,
	},
	sandacondite: {
		name: "Sandacondite",
		spritenum: 578,
		megaStone: { Sandaconda: "Sandaconda-Gmax" },
		itemUser: ["Sandaconda"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -15,
		gen: 9,
	},
	toxtricitite: {
		name: "Toxtricitite",
		spritenum: 578,
		megaStone: {
			Toxtricity: "Toxtricity-Gmax",
			"Toxtricity-Low-Key": "Toxtricity-Low-Key-Gmax",
		},
		itemUser: ["Toxtricity", "Toxtricity-Low-Key"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -16,
		gen: 9,
	},
	centiskorchite: {
		name: "Centiskorchite",
		spritenum: 578,
		megaStone: { Centiskorch: "Centiskorch-Gmax" },
		itemUser: ["Centiskorch"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -17,
		gen: 9,
	},
	hatterenite: {
		name: "Hatterenite",
		spritenum: 578,
		megaStone: { Hatterene: "Hatterene-Gmax" },
		itemUser: ["Hatterene"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -18,
		gen: 9,
	},
	grimmsnarlite: {
		name: "Grimmsnarlite",
		spritenum: 578,
		megaStone: { Grimmsnarl: "Grimmsnarl-Gmax" },
		itemUser: ["Grimmsnarl"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -19,
		gen: 9,
	},
	alcremite: {
		name: "Alcremite",
		spritenum: 578,
		megaStone: { Alcremie: "Alcremie-Gmax" },
		itemUser: ["Alcremie"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -20,
		gen: 9,
	},
	copperajite: {
		name: "Copperajite",
		spritenum: 578,
		megaStone: { Copperajah: "Copperajah-Gmax" },
		itemUser: ["Copperajah"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -21,
		gen: 9,
	},
	duraludonite: {
		name: "Duraludonite",
		spritenum: 578,
		megaStone: { Duraludon: "Duraludon-Gmax" },
		itemUser: ["Duraludon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -22,
		gen: 9,
	},
	jumplufite: {
		name: "Jumplufite",
		spritenum: 578,
		megaStone: { Jumpluff: "Jumpluff-Mega" },
		itemUser: ["Jumpluff"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -23,
		gen: 9,
	},
	rillaboomite: {
		name: "Rillaboomite",
		spritenum: 578,
		megaStone: { Rillaboom: "Rillaboom-Gmax" },
		itemUser: ["Rillaboom"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -24,
		gen: 9,
	},
	cinderecite: {
		name: "Cinderecite",
		spritenum: 578,
		megaStone: { Cinderace: "Cinderace-Gmax" },
		itemUser: ["Cinderace"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -25,
		gen: 9,
	},
	inteleonite: {
		name: "Inteleonite",
		spritenum: 578,
		megaStone: { Inteleon: "Inteleon-Gmax" },
		itemUser: ["Inteleon"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -26,
		gen: 9,
	},
	pikachuite: {
		name: "Pikachuite",
		spritenum: 578,
		megaStone: { "Pikachu-Starter": "Pikachu-Gmax" },
		itemUser: ["Pikachu-Starter"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
		num: -27,
		gen: 9,
	},
	eeveeite: {
		name: "Eeveeite",
		spritenum: 578,
		megaStone: { "Eevee-Starter": "Eevee-Mega" },
		itemUser: ["Eevee-Starter"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
		num: -28,
		gen: 9,
	},
	venusauritex: {
		name: "Venusaurite X",
		spritenum: 608,
		megaStone: { Venusaur: "Venusaur-Mega" },
		itemUser: ["Venusaur"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 659,
		gen: 6,
		isNonstandard: "Past",
	},
	venusauritey: {
		name: "Venusaurite Y",
		spritenum: 608,
		megaStone: { Venusaur: "Venusaur-Gmax" },
		itemUser: ["Venusaur"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 659,
		gen: 6,
		isNonstandard: "Past",
	},
	blastoisinitey: {
		name: "Blastoisinite Y",
		spritenum: 583,
		megaStone: { Blastoise: "Blastoise-Gmax" },
		itemUser: ["Blastoise"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 661,
		gen: 6,
		isNonstandard: "Past",
	},
	blastoisinitex: {
		name: "Blastoisinite X",
		spritenum: 583,
		megaStone: { Blastoise: "Blastoise-Mega" },
		itemUser: ["Blastoise"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 661,
		gen: 6,
		isNonstandard: "Past",
	},
	gengaritey: {
		name: "Gengarite Y",
		spritenum: 583,
		megaStone: { Gengar: "Gengar-Gmax" },
		itemUser: ["Gengar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 661,
		gen: 6,
		isNonstandard: "Past",
	},
	gengaritex: {
		name: "Gengarita X",
		spritenum: 583,
		megaStone: { Gengar: "Gengar-Mega" },
		itemUser: ["Gengar"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: 661,
		gen: 6,
		isNonstandard: "Past",
	},
};
