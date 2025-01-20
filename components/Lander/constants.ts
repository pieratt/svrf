export const SECONDARY_TEXT = "font-serif text-lg text-zinc-400";
export const PRIMARY_TEXT = "font-serif text-lg text-white";

// Color combinations for pills - each is [background, text]
export type ColorCombo = [string, string];

export const PRICE_BUTTON_COLORS: { [key: string]: ColorCombo } = {
  svrf: ['#FFFFFF', '#000000'], // White & Black for main SVRF button
    member: ['#9d7eff', '#1e11c9'], // Electric indigo & Lime
    editor: ['#5d0096', '#FF3366'], // Hot pink & Turquoise
};

// Editor username color combinations
export const EDITOR_COLORS: ColorCombo[] = [
  ['#FF10F0', '#000000'], // Hot pink & Black
  ['#4831D4', '#CCF381'], // Electric indigo & Lime
  ['#00FF00', '#000000'], // Neon green & Black
  ['#FF3366', '#33FFCC'], // Hot pink & Turquoise
  ['#FFD700', '#000000'], // Gold & Black
  ['#9933FF', '#00FF99'], // Purple & Mint
  ['#FF6B6B', '#4ECDC4'], // Coral & Teal
  ['#845EC2', '#FF9671'], // Purple & Peach
  ['#00C9A7', '#FF4B4B'], // Teal & Red
  ['#4D8076', '#FFC75F'], // Forest & Gold
];
