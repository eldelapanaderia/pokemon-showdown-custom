import { ModdedItemData } from "../../../sim/dex-items";
// TODO megapiedras. A la espera de hacer los pokemon
export const Items: { [k: string]: ModdedItemData } = {
	//CUSTOM ITEMS
	//TODO modificar en traducciones el supereviolite que creo que esta mal
	supereviolite: {
		name: "Supereviolite",
		// name: "Super Mineral Evolutivo",
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
		isNonstandard: null,
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
	volcaronite: {
		isNonstandard: null,
		name: "Volcaronite",
		spritenum: 578,
		megaStone: { Volcarona: "Volcarona-Mega" },
		itemUser: ["Volcarona"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -29,
		gen: 9,
	},
	enteite: {
		isNonstandard: null,
		name: "Enteite",
		spritenum: 578,
		megaStone: { Entei: "Entei-Mega" },
		itemUser: ["Entei"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.baseSpecies];
		},
		num: -30,
		gen: 9,
	},
	machampite: {
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
		isNonstandard: null,
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
	raichuitez: {
		isNonstandard: null,
		name: "Raichuite Z",
		spritenum: 578,
		megaStone: { "Raichu-Z": "Raichu-Mega-Z" },
		itemUser: ["Raichu-Z"],
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
		num: -31,
		gen: 9,
	},
	chesnaughtitez: {
		isNonstandard: null,
		name: "Chesnaughtite Z",
		megaStone: { "Chesnaught-Z": "Chesnaught-Mega-Z" },
		itemUser: ["Raichu-Z"],
		spritenum: 578,
		num: -32,
		gen: 9,
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
	},
	delphoxitez: {
		isNonstandard: null,
		name: "Delphoxite Z",
		megaStone: { "Delphox-Z": "Delphox-Mega-Z" },
		itemUser: ["Delphox-Z"],
		spritenum: 578,
		num: -33,
		gen: 9,
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
	},
	greninjiteash: {
		isNonstandard: null,
		name: "Greninjite Ash",
		megaStone: { Greninja: "Greninja-Ash" },
		itemUser: ["Greninja"],
		spritenum: 578,
		num: -34,
		gen: 9,
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
	},
	greninjitez: {
		isNonstandard: null,
		name: "Greninjite Z",
		megaStone: { "Greninja-Z": "Greninja-Mega-Z" },
		itemUser: ["Greninja-Z"],
		spritenum: 578,
		num: -35,
		gen: 9,
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
	},
	florgesite: {
		isNonstandard: null,
		name: "Florgesite",
		megaStone: { Florges: "Florges-Mega" },
		itemUser: ["Florges"],
		spritenum: 578,
		num: -36,
		gen: 9,
		onTakeItem(item, source) {
			return !item.megaStone?.[source.baseSpecies.name];
		},
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
	enigmaberry: {
		inherit: true,
		name: "Enigma Berry",
		spritenum: 124,
		isBerry: true,
		naturalGift: {
			basePower: 100,
			type: "Bug",
		},
		onUpdate(pokemon) {
			if (pokemon.status === "dcy") {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			if (pokemon.status === "dcy") {
				pokemon.cureStatus();
			}
		},
		num: 208,
		gen: 3,
	},
	punchingglove: {
		inherit: true,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags["punch"]) {
				this.debug("Punching Glove boost");
				return this.chainModify([4710, 4096]);
			}
		},
	},
	// Plates to 25% boost

	icicleplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Ice") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	insectplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Bug") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	ironplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Steel") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	meadowplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Grass") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	mindplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Psychic") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	pixieplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === "Fairy") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	skyplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Flying") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	splashplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Water") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	spookyplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Ghost") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	stoneplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Rock") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	toxicplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Poison") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	zapplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === "Electric") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	dracoplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === "Dragon") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	dreadplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === "Dark") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	earthplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === "Ground") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	fistplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === "Fighting") {
				return this.chainModify([5120, 4096]);
			}
		},
	},
	flameplate: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === "Fire") {
				return this.chainModify([5120, 4096]);
			}
		},
	},

	// New Items Pokemon-Z

	blankplate: {
		name: "Blank Plate",
		onPlate: "Normal",
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === "Normal") {
				return this.chainModify([5120, 4096]);
			}
		},
		onTakeItem(item, pokemon, source) {
			if (
				(source && source.baseSpecies.num === 493) ||
				pokemon.baseSpecies.num === 493
			) {
				return false;
			}
			return true;
		},
		forcedForme: "Arceus",
		num: -1,
		gen: 4,
	},
	jawshell: {
		name: "Jaw Shell",
		// name: "Armazón de Fauces",
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			// Potencia movimientos con la flag 'bite' (mordiscos) un 20%
			if (move.flags["bite"]) {
				return this.chainModify([4915, 4096]);
			}
		},
		onModifyCritRatio(critRatio, user, target, move) {
			// Aumenta la probabilidad de crítico en un nivel para movimientos de mordisco
			if (move.flags["bite"]) {
				return critRatio + 1;
			}
		},
		num: -1,
		gen: 9, // O la generación que estés usando en tu mod
		// desc: "Potencia los movimientos de mordisco un 20% y aumenta su probabilidad de crítico.",
		desc: "Boosts the power of biting moves by 20% and increases their critical hit ratio.",
	},
	spikeorb: {
		// punzasfera: {
		// Esfera punzante que provoca sangrado. Debe llevarla un Pokémon.
		name: "Spike Orb",
		fling: {
			basePower: 30,
			status: "bld",
		},
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			pokemon.trySetStatus("bld", pokemon);
		},
		num: -1,
		gen: 9,
		desc: "Contact moves used by the holder have a 30% chance to cause bleeding.",
	},
	spikedknuckle: {
		// nudillopuas: {
		// Los ataques de contacto tienen un 30% de producir Hemorragia (el enemigo recibirá más críticos).
		name: "Spiked Knuckle",
		onSourceDamagingHit(damage, target, source, move) {
			// Los ataques de contacto tienen un 30% de producir Hemorragia (bld)
			if (move.flags["contact"] && this.randomChance(30, 100)) {
				target.trySetStatus("bld", source);
			}
		},
		num: -1,
		gen: 9,
		desc: "Holder's contact moves have a 30% chance to inflict bleeding on the target.",
	},
	hanheldcannon: {
		// canondemano
		// Potencia un 30% los movimientos de pulso.
		name: "Handheld Cannon",
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			// Potencia los movimientos de pulso (pulse) un 30%
			if (move.flags["pulse"]) {
				return this.chainModify([5325, 4096]);
			}
		},
		num: -1,
		gen: 9,
		desc: "Holder's pulse moves have their power boosted by 30%.",
	},
	pneumaticbellows: {
		// fuelleneumatico
		// Potencia un 50% los movimientos de viento.
		name: "Pneumatic Bellows",
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			// Potencia los movimientos de viento (wind) un 50%
			if (move.flags["wind"]) {
				return this.chainModify(1.5);
			}
		},
		num: -1,
		gen: 9,
		desc: "Holder's wind moves have their power boosted by 50%.",
	},
	bravesword: {
		// espadavaliente
		// Potencia un 30% los movimientos de corte. Un 50% si la lleva Kricketune.
		name: "Brave Sword",
		// spritenum: 408,
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move.flags["slicing"]) {
				if (user.baseSpecies.num === 402) {
					return this.chainModify(1.5);
				}
				return this.chainModify([5325, 4096]);
			}
		},
		num: -1,
		gen: 9,
		desc: "Holder's slicing moves have 1.3x power. If holder is Kricketune, 1.5x power.",
	},
	assaultshell: {
		// corazaasalto
		// Aumenta la Defensa un 40% si el Pokémon solo lleva movimientos ofensivos.
		name: "Assault Shell",
		spritenum: 581,
		fling: {
			basePower: 80,
		},
		onModifyDefPriority: 1,
		onModifyDef(def) {
			return this.chainModify(1.4);
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.category === "Status" && move.id !== "mefirst") {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		num: -1,
		gen: 9,
		desc: "Raises holder's Defense by 40%, but prevents the use of status moves.",
	},
	skiboard: {
		// tablaesqui
		// Aumenta el Ataque de Bibarel un 30% y la Velocidad un 50%
		name: "Ski Board",
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.num === 400) {
				return this.chainModify([5325, 4096]);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.baseSpecies.num === 400) {
				return this.chainModify(1.5);
			}
		},
		num: -1,
		gen: 9,
		desc: "If held by Bibarel, its Attack is boosted by 30% and its Speed by 50%.",
	},
	protectivehelmet: {
		// cascoprotector
		// No recibe daño de retroceso de sus propios ataques, pero solo puede usar movs. ofensivos.
		name: "Protective Helmet",
		onDamage(damage, target, source, effect) {
			// Si el efecto del daño es por retroceso (recoil), se anula (devuelve 0)
			if (effect.id === "recoil") {
				if (!this.activeMove) return;
				if (this.activeMove.id !== "struggle") return 0;
			}
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.category === "Status" && move.id !== "mefirst") {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		num: -1,
		gen: 9,
		desc: "The holder is immune to recoil damage, but it can only use offensive moves.",
	},
	evilmask: {
		// mascaracruel
		// El daño contra enemigos que sufren estados alterados aumenta un 25%.
		name: "Evil Mask",
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			// Si el objetivo tiene un estado alterado (parálisis, sueño, etc.)
			if (target.status) {
				return this.chainModify([5120, 4096]);
			}
		},
		num: -1,
		gen: 9,
		desc: "Holder's attacks do 1.25x damage against targets with a status condition.",
	},
	raizancestral: {
		// raizancestral
		// Los ataques de drenaje siempre curan al usuario un 25% de su salud total, de forma fija.
		name: "Ancient Root",
		onAfterMoveSelfPriority: 10,
		onAfterMoveSelf(pokemon, target, move) {
			if (move.drain && pokemon.lastDamage > 0) {
				this.heal(pokemon.maxhp / 4, pokemon);
			}
		},
		onPrepareHit(source, target, move) {
			if (move.drain) {
				delete move.drain;
			}
		},
		num: -1,
		gen: 9,
		desc: "Drain moves heal the user for a fixed 25% of its max HP instead of their usual effect.",
	},
	bloodring: {
		// anillodesangre
		// El daño de los golpes críticos aumenta un 40%.
		name: "Blood Ring",
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug("Blood Ring boost");
				return this.chainModify(1.4);
			}
		},
		num: -1,
		gen: 9,
		desc: "The holder's critical hits deal 1.4x damage.",
	},
	laggingtail: {
		name: "Lagging Tail",
		spritenum: 237,
		fling: {
			basePower: 10,
		},
		onModifyAtk(atk, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Marolier' || pokemon.baseSpecies.baseSpecies === 'Marowak') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Marowak", "Marolier"],
		onFractionalPriority: -0.1,
		num: 279,
		gen: 4,
	},
	floatstone: { //piedra pomez
		name: "Float Stone",
		spritenum: 147,
		fling: {
			basePower: 30,
		},
		onModifyWeight(weighthg) {
			return this.trunc(weighthg / 2);
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.chainModify(1.25);
		},
		num: 539,
		gen: 5,
	},
};
