import { themeModeType } from "./types";
import { Dispatch, SetStateAction } from "react";
export interface themeContextInterFace {
  themeMode: themeModeType;
  setThemeMode: Dispatch<SetStateAction<themeModeType>>;
}
