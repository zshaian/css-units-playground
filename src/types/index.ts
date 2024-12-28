type Theme = "dark" | "light" | "system";
type ThemeProviderState = [Theme,React.Dispatch<React.SetStateAction<Theme>>]
interface ThemeProviderProps {
  children: React.ReactNode;
}

type ValidUnits = "rem" | "em" | "%" | "px" | "vw" | "vh" | "vmin" | "vmax";

interface UnitState {
  fromUnitValue: number | string;
  fromUnit: ValidUnits;
  toUnitValue: number | string;
  toUnit: ValidUnits;
  rootFontSize: number | string;
  baseFontSize: number | string;
}

interface ConvertionFormulaValue {
  formula:string;
  calculation:string;
}

interface ConvertionInfoValue extends ConvertionFormulaValue {
  fromUnit: ValidUnits;
  toUnit: ValidUnits;
}

export type {
  UnitState,
  ConvertionFormulaValue,
  ConvertionInfoValue,
  ValidUnits,
  ThemeProviderProps,
  ThemeProviderState,
  Theme,
};
