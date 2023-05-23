import { colorsLight } from "./light";
import { colorsDark } from "./dark";

export type AppColors = typeof colorsLight;
export const Colors = { light: colorsLight, dark: colorsDark };
export * from "./dark";
export * from "./light";
