// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import("../sim/dex-formats").FormatList = [
	// Likeshop Spotlight
	///////////////////////////////////////////////////////////////////
	{
		section: "Custom Mods Bo1",
		column: 1,
	},
	{
		name: "[Gen 9] Pokémon Añil Random",
		mod: "anilrandom",
		id: "gen9pokemonanilrandom" as ID,
		ruleset: [
			"Adjust Level = 50", //Ajustar Nivel
			"Species Clause",
			"HP Percentage Mod",
			// "Sleep Clause Mod",
			"Sleep Clause Mod Custom",
			"Cancel Mod",
			"Team Preview",
			"Terastal Clause",
		],
		onBegin() {
			this.add(
				"-message",
				"Modo Pokémon Añil: Megas activadas, Terastal desactivado.",
			);
		},
		onValidateSet(set) {
			// Esto permite que cualquier Pokémon y habilidad sea válido
			return;
		},
		// Desactivar Terastal explícitamente
		onValidateTeam(team) {
			for (const set of team) {
				if (set.teraType) set.teraType = undefined;
			}
		},
		onModifySpecies(species, target, source, effect) {
			if (effect && effect.id === "terastal") return;
			return species;
		},
	},
	{
		name: "[Gen 9] Pokémon Añil",
		mod: "anil",
		id: "gen9pokemonanil" as ID,
		ruleset: [
			"Adjust Level = 50", //Ajustar Nivel
			"Species Clause",
			"HP Percentage Mod",
			// "Sleep Clause Mod",
			"Sleep Clause Mod Custom",
			"Cancel Mod",
			"Team Preview",
			"Terastal Clause",
		],
		onBegin() {
			this.add(
				"-message",
				"Modo Pokémon Añil: Megas activadas, Terastal desactivado.",
			);
		},
		onValidateSet(set) {
			// Esto permite que cualquier Pokémon y habilidad sea válido
			return;
		},
		// Desactivar Terastal explícitamente
		onValidateTeam(team) {
			for (const set of team) {
				if (set.teraType) set.teraType = undefined;
			}
		},
		onModifySpecies(species, target, source, effect) {
			if (effect && effect.id === "terastal") return;
			return species;
		},
	},
	{
		name: "[Gen 9] Pokémon Z",
		mod: "z",
		id: "gen9pokemonz" as ID,
		ruleset: [
			"Adjust Level = 50", //Ajustar Nivel
			"Species Clause",
			"HP Percentage Mod",
			// "Sleep Clause Mod",
			"Sleep Clause Mod Custom",
			"Cancel Mod",
			"Team Preview",
			"Terastal Clause",
		],
		onBegin() {
			this.add(
				"-message",
				"Modo Pokémon Z: Megas activadas, Terastal desactivado.",
			);
		},
		onValidateSet(set) {
			// Esto permite que cualquier Pokémon y habilidad sea válido
			return;
		},
		// Desactivar Terastal explícitamente
		onValidateTeam(team) {
			for (const set of team) {
				if (set.teraType) set.teraType = undefined;
			}
		},
		onModifySpecies(species, target, source, effect) {
			if (effect && effect.id === "terastal") return;
			return species;
		},
	},
	{
		section: "Custom Mods Bo3",
		column: 1,
	},
	{
		name: "[Gen 9] Pokémon Añil Random (Bo3)",
		mod: "anilrandom",
		id: "gen9pokemonanilrandombo3" as ID,
		ruleset: [
			"Adjust Level = 50", //Ajustar Nivel
			"Species Clause",
			"HP Percentage Mod",
			// "Sleep Clause Mod",
			"Sleep Clause Mod Custom",
			"Cancel Mod",
			"Team Preview",
			"Terastal Clause",
			"Best of = 3",
		],
		onBegin() {
			this.add(
				"-message",
				"Modo Pokémon Añil: Megas activadas, Terastal desactivado.",
			);
		},
		onValidateSet(set) {
			// Esto permite que cualquier Pokémon y habilidad sea válido
			return;
		},
		// Desactivar Terastal explícitamente
		onValidateTeam(team) {
			for (const set of team) {
				if (set.teraType) set.teraType = undefined;
			}
		},
		onModifySpecies(species, target, source, effect) {
			if (effect && effect.id === "terastal") return;
			return species;
		},
	},
	{
		name: "[Gen 9] Pokémon Añil (Bo3)",
		mod: "anil",
		id: "gen9pokemonanilbo3" as ID,
		ruleset: [
			"Adjust Level = 50", //Ajustar Nivel
			"Species Clause",
			"HP Percentage Mod",
			// "Sleep Clause Mod",
			"Sleep Clause Mod Custom",
			"Cancel Mod",
			"Team Preview",
			"Terastal Clause",
			"Best of = 3",
		],
		onBegin() {
			this.add(
				"-message",
				"Modo Pokémon Añil: Megas activadas, Terastal desactivado.",
			);
		},
		onValidateSet(set) {
			// Esto permite que cualquier Pokémon y habilidad sea válido
			return;
		},
		// Desactivar Terastal explícitamente
		onValidateTeam(team) {
			for (const set of team) {
				if (set.teraType) set.teraType = undefined;
			}
		},
		onModifySpecies(species, target, source, effect) {
			if (effect && effect.id === "terastal") return;
			return species;
		},
	},
	{
		name: "[Gen 9] Pokémon Z Bo3",
		mod: "z",
		id: "gen9pokemonzbo3" as ID,
		ruleset: [
			"Adjust Level = 50", //Ajustar Nivel
			"Species Clause",
			"HP Percentage Mod",
			// "Sleep Clause Mod",
			"Sleep Clause Mod Custom",
			"Cancel Mod",
			"Team Preview",
			"Terastal Clause",
			"Best of = 3",
		],
		onBegin() {
			this.add(
				"-message",
				"Modo Pokémon Z: Megas activadas, Terastal desactivado.",
			);
		},
		onValidateSet(set) {
			// Esto permite que cualquier Pokémon y habilidad sea válido
			return;
		},
		// Desactivar Terastal explícitamente
		onValidateTeam(team) {
			for (const set of team) {
				if (set.teraType) set.teraType = undefined;
			}
		},
		onModifySpecies(species, target, source, effect) {
			if (effect && effect.id === "terastal") return;
			return species;
		},
	},
];
