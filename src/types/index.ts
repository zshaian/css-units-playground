type ConversionDirection = "from-unit" | "to-unit";

type ValidUnits = "rem" | "em" | "%" | "px";

interface UnitStoreState {
  fromUnitValue: number;
  fromUnit: ValidUnits;
  toUnitValue: number;
  toUnit: ValidUnits;
  rootFontSize: number;
  baseFontSize: number;
  changeFromUnitValue: (newUnitValue: number | string) => void;
  changeFromUnit: (newUnit: ValidUnits) => void;
  changeToUnitValue: (newUnitValue: number | string) => void;
  changeToUnit: (newUnit: ValidUnits) => void;
  changeRootFontSize: (newRootFontSize: number) => void;
  changeBaseFontSize: (newBaseFontSize: number) => void;
}

export type { UnitStoreState, ConversionDirection, ValidUnits };
