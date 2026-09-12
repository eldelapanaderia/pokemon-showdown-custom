// List of flags and their descriptions can be found in sim/dex-moves.ts

import { ModdedMoveData } from "../../../sim/dex-moves";

export const Moves: { [moveid: string]: ModdedMoveData } = {
	chatter: {
		inherit: true,
		secondary: {
			chance: 50,
			volatileStatus: "confusion",
		},
	},
	megahorn: {
		inherit: true,
		secondary: {
			chance: 20,
			status: "bld",
		},
	},
	xscissor: {
		inherit: true,
		secondary: {
			chance: 20,
			status: "bld",
		},
	},
	aircutter: {
		inherit: true,
		secondary: {
			chance: 30,
			status: "bld",
		},
	},
	hyperfang: {
		inherit: true,
		secondary: {
			chance: 70,
			status: "bld",
		},
	},
	crushclaw: {
		inherit: true,
		secondary: {
			chance: 50,
			status: "bld",
		},
	},
	slash: {
		inherit: true,
		secondary: {
			chance: 30,
			status: "bld",
		},
	},
	hornattack: {
		inherit: true,
		secondary: {
			chance: 30,
			status: "bld",
		},
	},
	twister: {
		inherit: true,
		basePower: 60,
	},
	overdrive: {
		inherit: true,
		basePower: 100,
	},
	paraboliccharge: {
		inherit: true,
		basePower: 70,
	},
	thundershock: {
		inherit: true,
		basePower: 45,
	},
	mistyexplosion: {
		inherit: true,
		basePower: 70,
		pp: 20,
		target: "normal",
		selfdestruct: undefined,
		onBasePower: undefined,
		onModifyPriority(priority, source, target, move) {
			if (this.field.isTerrain("mistyterrain") && source.isGrounded()) {
				return priority + 1;
			}
		},
		// shortDesc: "Bruma misteriosa con prioridad alta en campo de niebla.",
	},
	strangesteam: {
		inherit: true,
		basePower: 95,
	},

	fairywind: {
		inherit: true,
		basePower: 40,
	},
	rocksmash: {
		inherit: true,
		basePower: 50,
	},
	armthrust: {
		inherit: true,
		basePower: 20,
	},
	ember: {
		inherit: true,
		basePower: 45,
	},
	fly: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
	},
	bounce: {
		inherit: true,
		basePower: 90,
		accuracy: 90,
	},
	airlash: {
		inherit: true,
		basePower: 80,
	},
	solarblade: {
		inherit: true,
		basePower: 130,
	},
	razorleaf: {
		inherit: true,
		basePower: 60,
		accuracy: 100,
	},
	megadrain: {
		inherit: true,
		basePower: 55,
	},
	absorb: {
		inherit: true,
		basePower: 30,
	},
	mudslap: {
		inherit: true,
		basePower: 35,
	},
	freezedry: {
		inherit: true,
		basePower: 80,
	},
	aurorabeam: {
		inherit: true,
		basePower: 80,
	},
	powdersnow: {
		inherit: true,
		basePower: 50,
	},
	razorwind: {
		inherit: true,
		basePower: 75,
		pp: 15,
		secondary: {
			chance: 30,
			status: "bld",
		},
	},
	cut: {
		inherit: true,
		type: "Normal",
		basePower: 60,
		secondary: {
			chance: 70,
			status: "bld",
		},
	},
	rage: {
		inherit: true,
		basePower: 30,
	},
	spikecannon: {
		inherit: true,
		type: "Water",
		basePower: 25,
	},
	swagger: {
		inherit: true,
		accuracy: 90,
	},
	belch: {
		inherit: true,
		basePower: 130,
		accuracy: 100,
	},
	gunkshot: {
		inherit: true,
		accuracy: 90,
	},
	poisonsting: {
		inherit: true,
		basePower: 25,
	},
	poisongas: {
		inherit: true,
		accuracy: 80,
	},
	futuresight: {
		inherit: true,
		basePower: 130,
	},
	dreameater: {
		inherit: true,
		basePower: 110,
	},
	zenheadbutt: {
		inherit: true,
		basePower: 90,
	},
	meteorbeam: {
		inherit: true,
		basePower: 130,
	},
	rockslide: {
		inherit: true,
		basePower: 80,
		accuracy: 95,
	},
	smackdown: {
		inherit: true,
		basePower: 60,
	},
	irontail: {
		inherit: true,
		basePower: 110,
		accuracy: 85,
	},
	meteormash: {
		inherit: true,
		basePower: 100,
	},
	geargrind: {
		inherit: true,
		basePower: 55,
		accuracy: 90,
	},
	metalclaw: {
		inherit: true,
		basePower: 60,
	},
	aquatail: {
		inherit: true,
		basePower: 95,
	},
	dive: {
		inherit: true,
		basePower: 90,
	},
	octazooka: {
		inherit: true,
		basePower: 85,
		accuracy: 90,
	},
	watergun: {
		inherit: true,
		basePower: 45,
	},
	bouncybubble: {
		inherit: true,
		basePower: 90,
	},
	buzzybuzz: {
		inherit: true,
		basePower: 90,
	},
	sizzlyslide: {
		inherit: true,
		basePower: 90,
	},
	glitzyglow: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
	},
	baddybad: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
	},
	sappyseed: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
	},
	freezyfrost: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
	},
	sparklyswirl: {
		inherit: true,
		basePower: 90,
		accuracy: 100,
	},
	zippyzap: {
		inherit: true,
		basePower: 50,
		willCrit: true,
		secondary: undefined,
	},
	gigatonhammer: {
		inherit: true,
		basePower: 150,
	},
	chloroblast: {
		inherit: true,
		basePower: 130,
	},
	venomdrench: {
		inherit: true,
		accuracy: 85,
		pp: 5,
	},
	psyshieldbash: {
		inherit: true,
		pp: 15,
	},
	jawlock: {
		inherit: true,
		basePower: 95,
	},
	infernalparade: {
		inherit: true,
		basePower: 70,
	},
	tachyoncutter: {
		inherit: true,
		pp: 30,
	},
	wickedblow: {
		inherit: true,
		pp: 20,
	},
	noxioustorque: {
		inherit: true,
		pp: 20,
	},
	nihillight: {
		basePower: 120,
		inherit: true,
	},
	spinout: {
		inherit: true,
		pp: 10,
	},
	luminacrash: {
		inherit: true,
		pp: 20,
	},
	originpulse: {
		inherit: true,
		basePower: 120,
	},
	thief: {
		inherit: true,
		pp: 10,
	},
	outrage: {
		inherit: true,
		pp: 15,
	},
	shockwave: {
		inherit: true,
		basePower: 65,
	},
	focusblast: {
		inherit: true,
		accuracy: 75,
	},
	sacredsword: {
		inherit: true,
		pp: 20,
	},
	skyuppercut: {
		inherit: true,
		accuracy: 95,
	},
	submission: {
		inherit: true,
		pp: 25,
	},
	firespin: {
		inherit: true,
		basePower: 40,
		accuracy: 95,
	},
	skyattack: {
		inherit: true,
		accuracy: 100,
	},
	airslash: {
		inherit: true,
		basePower: 80,
		pp: 20,
		accuracy: 100,
	},
	tailwind: {
		inherit: true,
		pp: 30,
	},
	shadowpunch: {
		inherit: true,
		basePower: 80,
	},
	astonish: {
		inherit: true,
		basePower: 40,
	},
	solarbeam: {
		inherit: true,
		basePower: 140,
	},
	needlearm: {
		inherit: true,
		basePower: 85,
	},
	vinewhip: {
		inherit: true,
		pp: 15,
	},
	grasswhistle: {
		inherit: true,
		accuracy: 60,
	},
	mudbomb: {
		inherit: true,
		basePower: 70,
		accuracy: 95,
	},
	mudshot: {
		inherit: true,
		basePower: 60,
	},
	sandtomb: {
		inherit: true,
		basePower: 40,
		accuracy: 95,
	},
	iciclecrash: {
		inherit: true,
		basePower: 90,
		accuracy: 95,
	},
	lastresort: {
		inherit: true,
		basePower: 70,
	},
	skullbash: {
		inherit: true,
		pp: 15,
	},
	strength: {
		inherit: true,
		basePower: 100,
		type: "Rock",
		pp: 5,
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
	},
	covet: {
		inherit: true,
		type: "Fairy",
		pp: 40,
	},
	snore: {
		inherit: true,
		basePower: 80,
	},
	barrage: {
		inherit: true,
		basePower: 25,
		type: "Psychic",
		accuracy: 100,
	},
	hiddenpower: {
		inherit: true,
		basePower: 70,
	},
	present: {
		inherit: true,
		type: "Ice",
		accuracy: 100,
		onModifyMove(move, pokemon, target) {
			const rand = this.random(10);
			if (rand < 2) {
				move.heal = [1, 4];
				move.infiltrates = true;
			} else if (rand < 6) {
				move.basePower = 90;
			} else if (rand < 9) {
				move.basePower = 140;
			} else {
				move.basePower = 200;
			}
		},
	},
	growth: {
		inherit: true,
		pp: 40,
	},
	milkdrink: {
		inherit: true,
		pp: 10,
	},
	minimize: {
		inherit: true,
		pp: 20,
	},
	simplebeam: {
		inherit: true,
		accuracy: 10,
	},
	supersonic: {
		inherit: true,
		accuracy: 75,
	},
	swordsdance: {
		inherit: true,
		pp: 30,
	},
	poisonfang: {
		inherit: true,
		basePower: 70,
	},
	acidarmor: {
		inherit: true,
		pp: 40,
	},
	extrasensory: {
		inherit: true,
		pp: 30,
	},
	synchronoise: {
		inherit: true,
		pp: 15,
	},
	psywave: {
		inherit: true,
		accuracy: 80,
	},
	barrier: {
		inherit: true,
		pp: 30,
	},
	hypnosis: {
		inherit: true,
		accuracy: 70,
	},
	rest: {
		inherit: true,
		pp: 10,
	},
	ancientpower: {
		inherit: true,
		basePower: 70,
	},
	rocktomb: {
		inherit: true,
		pp: 10,
	},
	steelwing: {
		inherit: true,
		pp: 15,
		accuracy: 100,
	},
	scald: {
		inherit: true,
		basePower: 70,
	},
	clamp: {
		inherit: true,
		basePower: 60,
		pp: 10,
	},
	whirlpool: {
		inherit: true,
		basePower: 40,
		accuracy: 95,
	},

	drainingkiss: {
		inherit: true,
		basePower: 65,
	},

	nuzzle: {
		inherit: true,
		basePower: 30,
	},

	//Flag kicks (Camorrista)
	highjumpkick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			gravity: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	thunderouskick: {
		inherit: true,
		flags: { contact: 1, protect: 1, mirror: 1, kick: 1 } as any,
	},
	jumpkick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			gravity: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	lowsweep: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	rollingkick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
		basePower: 70,
	},
	doublekick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	triplekick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
		basePower: 15,
	},
	lowkick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	tropkick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	tripleaxel: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	megakick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	axekick: {
		inherit: true,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},
	blazekick: {
		inherit: true,
		basePower: 90,
		flags: {
			contact: 1,
			protect: 1,
			mirror: 1,
			metronome: 1,
			kick: 1,
		} as any,
	},

	// ORIGINAL MOVES
	// escalofrio
	shiver: {
		num: -4,
		accuracy: 85,
		basePower: 0,
		category: "Status",
		name: "Shiver",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		status: "frz",
		secondary: undefined,
		target: "normal",
		type: "Ice",
		// shortDesc: "Congela al objetivo.",
		shortDesc: "Freezes the target.",
		// desc: "Provoca un terrible escalofrio en el objetivo y lo congela.",
		desc: "The user chills the target to the bone, causing a terrible shiver. This freezes the target.",
		// desc: "Provoca un terrible escalofr\u00edo en el objetivo y lo congela.",
	},
	// deslizamiento
	iceglide: {
		num: -5,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Ice Glide",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Ice",
		// shortDesc: "Aumenta la Velocidad del usuario en 1 nivel.",
		// desc:"Se desliza con un esquí y aumenta la Velocidad del atacante.",
		shortDesc: "Raises the user's Speed stat.",
		desc: "The user glides gracefully on ice to strike. This also raises the user's Speed stat.",
	},
	// atrapabicho: {
	bugcatcher: {
		num: -6,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Bug Catcher",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, bite: 1, metronome: 1 },
		onEffectiveness(typeMod, target, type) {
			if (type === "Bug") return 1;
		},
		target: "normal",
		type: "Grass",
		// shortDesc: "Eficaz contra Pokémon de tipo Bicho.",
		// desc:"Muerde con unas fauces eficaces contra los Pokémon Bicho. Eficaz contra Pokémon de tipo Bicho.",
		shortDesc: "Super effective against Bug-type Pokémon.",
		desc: "A specialized attack that traps insects. This move is super effective against Bug-type Pokémon.",
	},
	// triplegolpe: {
	triplehit: {
		num: -7,
		accuracy: 100,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			return 15 * move.hit;
		},
		category: "Physical",
		name: "Triple Hit",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		multihit: 3,
		multiaccuracy: true,
		secondary: {
			chance: 10,
			volatileStatus: "flinch",
		},
		target: "normal",
		type: "Normal",
		// desc: "Golpea 3 veces. Cada golpe es más fuerte.",
		// shortDesc: "Golpea 3 veces.",
		desc: "The user strikes the target three times in succession. Each hit becomes progressively more powerful.",
		shortDesc: "The user strikes the target three times in succession.",
	},
	cursegnition: {
		num: -1,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Cursegnition",
		// name: "Maldignición",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		secondary: undefined,
		target: "normal",
		type: "Ghost",
		shortDesc:
			// "Puede causar quemaduras.",
			"Could burn the target",
		desc: "The target gets a revengeful curse",
		//"Lanza una maldición vengativa al objetivo. Puede causar quemaduras."
	},
	posthumouslove: {
		num: -1,
		accuracy: 100,
		basePower: 1,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Physical",
		name: "Posthumous Love",
		// name: "Amor Póstumo",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: undefined,
		target: "normal",
		type: "Ghost",
		shortDesc: "Power increases with the user's friendship.",
		desc: "Power increases with the user's friendship.",
		// "Cuanto mayor sea la amistad con el Entrenador, más pega.",
	},
	ironmace: {
		num: -1,
		accuracy: 85,
		basePower: 100,
		category: "Physical",
		name: "Iron Mace",
		// name: "Ferromaza",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		shortDesc: "30% chance to lower the target's Defense by 1.",
		desc: "30% chance to lower the target's Defense by 1.",
		//  "Ataca con una contundente maza férrea y tiene un 30% de bajar la Defensa del objetivo.",
	},
	ironblade: {
		num: -1,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Iron Blade",
		// name: "Ferroespada",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
		secondary: undefined,
		target: "normal",
		type: "Steel",
		shortDesc: "High crit ratio",
		desc: "High crit ratio",
		//"Tiene mayor probabilidad de crítico.",
		critRatio: 2,
	},
	venompierce: {
		num: -1,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Venom Pierce",
		// name: "Punzadatóxica",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		onBasePower(basePower, pokemon, target) {
			if (target.status === "psn" || target.status === "tox") {
				return this.chainModify(2);
			}
		},
		secondary: undefined,
		target: "normal",
		type: "Poison",
		shortDesc: "Power doubles if the target is poisoned.",
		desc: "Power doubles if the target is poisoned.",
		// "Ataca con un pincho venenoso. El daño será doble a objetivos envenenados.",
	},
	mentalcrash: {
		num: -1,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Mental Crash",
		// name: "Carga Mental",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		shortDesc: "Damages the foe's mind and lowers their Sp. Atk.",
		desc: "Damages the foe's mind and lowers their Sp. Atk.",
		//  "Daña la mente del enemigo y reduce su Ataque Especial.",
	},
	medleywine: {
		num: -1,
		accuracy: 100,
		basePower: 95,
		category: "Special",
		name: "Medley Wine",
		// name: "Vinisurtido",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1, pulse: 1 },
		secondary: {
			chance: 20,
			volatileStatus: "confusion",
		},
		target: "normal",
		type: "Poison",
		shortDesc: "May confuse the target.",
		desc: "Attacks with a powerful stream of wine. May confuse the target.",
		// "Ataca con un potente chorro de vino. Puede confundir al objetivo.",
	},
	silkenblade: {
		num: -1,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Silken Blade",
		// name: "Espada Sedosa",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
		secondary: { chance: 30, status: "bld" },
		target: "normal",
		type: "Bug",
		shortDesc:
			"Attacks with an elegant, sharp blade. 30% chance to cause Bleeding.",
		desc: "Attacks with an elegant, sharp blade. 30% chance to cause Bleeding.",
		// shortDesc: "Corta con una elegante y afilada espada. Puede causar Hemorragia (30%).",
	},
	//Pendiente de saber que significa "extrae luz del objetivo". Podria ser poner el estado Decay/Caduco
	decayinglight: {
		num: -1,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Decaying Light",
		// name: "Luz Decadente",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		secondary: undefined,
		target: "normal",
		type: "Fairy",
		shortDesc: "Deals damage and extracts light from the target.",
		desc: "Deals damage and extracts light from the target.",
		//"Causa daño y extrae luz del objetivo.",
	},
	ironcage: {
		num: -1,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		// name: "Ferroprisión",
		name: "Iron Cage",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: undefined,
		volatileStatus: "partiallytrapped",
		target: "normal",
		type: "Steel",
		shortDesc: "Traps the target for four to five turns.",
	},
	icebreaker: {
		num: -1,
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		name: "Icebreaker",
		// name: "Rompehielos",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		recoil: [1, 2],
		secondary: undefined,
		target: "normal",
		type: "Ice",
		shortDesc: "The user has recoil damage.",
		desc: "The user has recoil damage.", //Como testarazo diria
		// shortDesc: "Arremete con una cabeza de hielo. El agresor resulta seriamente dañado.",
	},
	axeslash: {
		num: -1,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		name: "Axe Slash",
		// name: "Petrodaga",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
		secondary: undefined,
		target: "normal",
		type: "Rock",
		shortDesc: "High crit ratio.",
		desc: "It attacks the target with rock edge. High crit ratio.",
		// shortDesc: "Ataca al objetivo con un filo de roca. Suele ser crítico.",
		critRatio: 2,
	},
	sweatfeast: {
		num: -1,
		accuracy: 95,
		basePower: 110,
		category: "Physical",
		name: "Sweet Feast",
		// name: "Dulce Festín",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
		secondary: undefined,
		onDisableMove(pokemon) {
			if (!pokemon.ateBerry) pokemon.disableMove("sweatfeast");
		},
		target: "normal",
		type: "Fairy",
		shortDesc:
			"Attacks with sugary euphoria. Can only be used if the user has consumed a Berry.",
	},
	voltrush: {
		num: -1,
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Volt Rush",
		// name: "Cargagresión"
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		self: { volatileStatus: "charge" },
		secondary: undefined,
		target: "normal",
		type: "Electric",
		shortDesc: "Damages the target and charges energy for the next turn.",
		desc: "Damages the target and charges energy for the next turn.",
		// "Daña al rival y carga energía para el próximo turno.",
	},
	iciclehit: {
		num: -1,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Icicle Hit",
		// name: "Golpecarámbano", //vientocarambano
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		secondary: {
			chance: 30,
			volatileStatus: "flinch",
		},
		target: "normal",
		type: "Ice",
		shortDesc: "It could flinch.",
		desc: "It attacks with ice body. It could flinch.",
		// "Ataca con su cuerpo de hielo. Puede hacer que el objetivo retroceda.",
	},
	thornshot: {
		num: -1,
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		name: "Thorn Shot",
		// name: "Disparo Espina",
		pp: 15,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		onEffectiveness(typeMod, target, type) {
			if (type === "Flying") return 1;
		},
		secondary: undefined,
		target: "normal",
		type: "Grass",
		shortDesc:
			"It shoots a thorn high crit ratio. Super effective against Flying type.",
		desc: "It shoots a thorn high crit ratio. Super effective against Flying type.",
		//  "Dispara una espina con alto índice de crítico. Supereficaz contra el tipo Volador.",
		critRatio: 2,
	},
	flamingsaber: {
		num: -1,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Flaming Saber",
		// name: "Sable Ardiente",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, slicing: 1 },
		onBasePower(basePower, pokemon, target) {
			if (target.status === "par" || target.status === "brn") {
				return this.chainModify(1.5);
			}
		},
		secondary: undefined,
		target: "normal",
		type: "Fire",
		shortDesc:
			"Attacks with a flaming blade. 50% more damage to burned or paralysed targets.",
		desc: "50% more damage to burned or paralysed targets.",
		// "Ataca con una hoja en llamas. Hace un 50% más de daño contra objetivos paralizados o quemados.",
	},
	// COmo metronomo pero haciendo daño previo
	eggtrick: {
		num: -1,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Egg Trick",
		// name: "Truco Huevo",
		pp: 15,
		priority: 0,
		flags: {
			protect: 1,
			mirror: 1,
			failencore: 1,
			nosleeptalk: 1,
			noassist: 1,
			failcopycat: 1,
			failmimic: 1,
			failinstruct: 1,
		},
		onAfterHit(target, source, move) {
			const moves = this.dex.moves
				.all()
				.filter(
					(m) =>
						(!m.isNonstandard || m.isNonstandard === "Unobtainable") &&
						m.flags["metronome"] &&
						m.id !== "eggtrick",
				);
			let randomMove = "";
			if (moves.length) {
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) return;
			this.add("-anim", source, "Metronome", target); // Animación estética de Metrónomo
			this.actions.useMove(randomMove, source);
		},
		secondary: undefined,
		target: "normal",
		type: "Water",
		shortDesc:
			"It throws a magic egg to the target, then it makes a random move",
		desc: "It throws a magic egg to the target, then it makes a random move",
		// "Lanza un huevo mágico al objetivo, después hace un movimiento al azar entre una selección.",
	},
	marinedeluge: {
		num: -1,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Marine Deluge",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		secondary: undefined,
		target: "normal",
		type: "Water",
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness("Water", type);
		},
		shortDesc: "This moves is Water type and Fliying type at the same time.",
		desc: "This moves is Water type and Fliying type at the same time.",
		//  "Este movimiento es tipo Agua y Volador al mismo tiempo.",
	},
	bagueton: {
		num: -1,
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		name: "Bagueton",
		// name: "Baguetazo",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType("Fighting")) return;
			this.add("-fail", pokemon, "move: Bagueton");
			this.attrLastMove("[still]");
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(
					pokemon
						.getTypes(true)
						.map((type) => (type === "Fighting" ? "???" : type)),
				);
				this.add(
					"-start",
					pokemon,
					"typechange",
					pokemon.getTypes().join("/"),
					"[from] move: Bagueton",
				);
			},
		},
		secondary: undefined,
		target: "normal",
		type: "Fighting",
		shortDesc:
			"The user lost its Fighting type and it breaks the baguette to attack. It recovers the baguette when switchs.",
		desc: "The user lost its Fighting type and it breaks the baguette to attack. It recovers the baguette when switchs.",
		// "Pierde el tipo Lucha y rompe la baguette para atacar. Los repone saliendo del combate.",
	},
	spikesburst: {
		num: -1,
		accuracy: 90,
		basePower: 65,
		category: "Physical",
		name: "Spikes Burst",
		// name: "Ráfaga Púas" //georrafaga,
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onAfterHit(target, source, move) {
			if (!move.hasSheerForce && source.hp) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition("spikes");
				}
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			if (!move.hasSheerForce && source.hp) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition("spikes");
				}
			}
		},
		secondary: undefined,
		target: "normal",
		type: "Ground",
		shortDesc:
			"It shoots a burst of spikes that damage the target and set spikes.",
		desc: "It shoots a burst of spikes that damage the target and set spikes.",
		// "Dispara una ráfaga de espinas que causan daño y coloca púas.",
	},
	lightningspear: {
		num: -1,
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		name: "Lightning Spear",
		// name: "Lanza Relámpago",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1 },
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add("-prepare", attacker, move.name);
			this.boost({ atk: 1 }, attacker, attacker, move);
			if (!this.runEvent("ChargeMove", attacker, defender, move)) {
				return;
			}
			attacker.addVolatile("twoturnmove", defender);
			return null;
		},
		secondary: undefined,
		target: "normal",
		type: "Electric",
		shortDesc:
			"It charges in 2 turns with a huge spear of electricity. It also raises the Atk.",
		desc: "It charges in 2 turns with a huge spear of electricity. It also raises the Atk.",
		// "Carga en 2 turnos una enorme lanza de electricidad que impacta. También sube el Ataque.",
	},
	magesentence: {
		num: -1,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Mage Sentence",
		// name: "Condena de Mago",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onHit(target) {
			if (target.getTypes().join() === "Fire" || !target.setType("Fire")) {
				this.add("-fail", target);
				return null;
			}
			this.add("-start", target, "typechange", "Fire");
		},
		secondary: undefined,
		target: "normal",
		type: "Psychic",
		shortDesc:
			"It makes the target Fire type. It doesn't affect Fire type Pokemons.",
		desc: "It makes the target Fire type. It doesn't affect Fire type Pokemons.",
		// "Convierte al objetivo en tipo Fuego además de causar daño. No afecta a Pokémon de Fuego.",
	},
	stonehammer: {
		num: -1,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Stone Hammer",
		// name: "Petromazazo",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.dex.getEffectiveness("Grass", type);
		},
		secondary: undefined,
		target: "normal",
		type: "Rock",
		shortDesc: "This moves is Grass type and Rock type at the same time..",
		desc: "This moves is Grass type and Rock type at the same time.",
		// "Este movimiento es de tipo Roca y Planta a la vez.",
	},
	infinitelight: {
		num: -1,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Infinite Light",
		// name: "Luz Infinita",
		pp: 20,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		status: "dcy",
		target: "normal",
		type: "Electric",
		shortDesc: "Apply Decay to target.",
		desc: "Attacks with its tail forming a infinite symbol. Apply Decay to target.",
		// "Ataca formando un símbolo infinito con su cola. Aplica Caduco al rival.",
	},
	eclipse: {
		num: -1,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Eclipse",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1 },
		secondary: undefined,
		target: "normal",
		type: "Rock",
		onAfterMoveSecondarySelf(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies === "Constellar-Sun" &&
				!pokemon.transformed
			) {
				const constellarForme =
					pokemon.species.id === "constellarmoon" ? "-Sun" : "-Moon";
				pokemon.formeChange(
					"Constellar" + constellarForme,
					this.effect,
					false,
					"0",
					"[msg]",
				);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.species.id == "constellarsun") {
				move.category = "Physical";
			}
			if (pokemon.species.id == "constellarmoon") {
				move.category = "Special";
			}
		},
		shortDesc:
			"Changes Constellar between Sun and Moon form. This move is Physical or Special based on the form.",
		desc: "Changes Constellar between Sun and Moon form. This move is Physical or Special based on the form.",
		//  "Cambia a Constellar entre forma solar y lunar. Este mov. es físico o especial en función de la forma.",
	},
	brokenheart: {
		num: -1,
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		name: "Broken Heart",
		// name: "Corazón Roto",
		pp: 1,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		ohko: true,
		onTryHit(target) {
			if (target.hp > target.maxhp / 4) {
				this.add("-fail", target, "move: Broken Heart");
				this.hint("Solo funciona si el objetivo tiene 25% de HP o menos.");
				return null;
			}
		},
		secondary: undefined,
		target: "normal",
		type: "Fairy",
		shortDesc:
			"Fails if the target have more than 25% of HP. Destroys the target.",
		// "Falla si tienes más del 25% de salud. Destruye directamente al objetivo.",
		desc: "Fails if the target have more than 25% of HP. Destroys the target.",
		// "Falla si tienes más del 25% de salud. Destruye directamente al objetivo.",
	},
	snipeshot: {
		inherit: true,
		flags: {protect: 1, mirror: 1, metronome: 1, pulse: 1}
	},
	flashcannon: {
		inherit: true,
		flags: { protect: 1, mirror: 1, metronome: 1, pulse:1 },
	}

};
