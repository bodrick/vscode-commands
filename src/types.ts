export type ExtensionConfig = Readonly<{
	/**
	 * Main config. Items to show in Tree View.
	 */
	commands: TopLevelCommands;
	/**
	 * Use shorter command ids.
	 */
	alias: Record<string, string>;
	/**
	 * Whether Tree View shows folders collapsed by default or not.
	 */
	treeViewCollapseFolders: boolean;
	/**
	 * Adds all items to Command Palette (Requires editor reload).
	 */
	populateCommandPalette: boolean;
	/**
	 * Controls the text of Status Bar item when adding from Tree View context menu.
	 */
	statusBarDefaultText: 'pick' | 'same';
	/**
	 * Where to put command on Status Bar (left of right).
	 */
	statusBarDefaultPosition: 'left' | 'right';
	toggleSettings: {
		/**
		* When enabled - show notification after using `commands.toggleSetting` or `commands.incrementSetting`.
		*/
		showNotification: boolean;
	};
}>;
/**
 * Main configuration property. Can contain folders or command objects.
 * Folders cannot contain folders.
 */
export interface TopLevelCommands {
	[key: string]: CommandFolder & CommandObject;
}

export type Runnable = CommandObject | Sequence;

export interface CommandObject {
	command: string;
	args?: unknown;
	delay?: number;
	icon?: string;
	iconColor?: string;
	statusBar?: {
		alignment: 'left' | 'right';
		text: string;
		priority?: number;
		tooltip?: string;
		color?: string;
	};
	sequence?: Sequence;
}
export type Sequence = (CommandObject | string)[];
/**
 * Folder can only have `nestedItems` property.
 */
export interface CommandFolder {
	nestedItems?: TopLevelCommands;
}

// ──────────────────────────────────────────────────────────────────────
/**
 * Type for `toggleSetting` command.
 */
export interface ToggleSetting {
	setting: string;
	value: unknown[] | string;
}
