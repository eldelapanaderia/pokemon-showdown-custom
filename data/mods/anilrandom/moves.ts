// List of flags and their descriptions can be found in sim/dex-moves.ts

import { ModdedMoveData } from "../../../sim/dex-moves";

export const Moves: { [moveid: string]: ModdedMoveData } = {
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
		shortDesc: "Bruma misteriosa con prioridad alta en campo de niebla.",
	},
	strangesteam: {
		inherit: true,
		basePower: 95,
	},
	drainingkiss: {
		inherit: true,
		basePower: 60,
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
	shadowpunch: {
		inherit: true,
		basePower: 75,
	},
	solarblade: {
		inherit: true,
		basePower: 130,
	},
	solarbeam: {
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
	mudbomb: {
		inherit: true,
		accuracy: 95,
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
	},
	strength: {
		inherit: true,
		type: "Rock",
		basePower: 90,
	},
	cut: {
		inherit: true,
		type: "Steel",
		basePower: 65,
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
	supersonic: {
		inherit: true,
		accuracy: 65,
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
	clamp: {
		inherit: true,
		basePower: 50,
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
		secondary: null,
	},
	nihillight: {
		basePower: 200,
		inherit: true,
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
		secondary: null,
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
	// atrapabicho
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
	// triplegolpe
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
};
