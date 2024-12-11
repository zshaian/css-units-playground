type ValidUnits = "rem" | "em" | "%" | "px";

interface UnitState {
  fromUnitValue: number;
  fromUnit: ValidUnits;
  toUnitValue: number; 
  toUnit: ValidUnits;
  rootFontSize: number; 
  baseFontSize: number;
}

interface ConvertionInfoValue {
  fromUnit: ValidUnits;
  toUnit: ValidUnits;
  formula: string;
  calculation: string;
}

type NoConvertionKeys = `rem->rem` | `em->em` | `px->px` | `%->%`;
type ConvertionInfoKeys = Exclude<`${ValidUnits}->${ValidUnits}`,NoConvertionKeys>; 
type ConvertionInfoProps = Record<ConvertionInfoKeys,ConvertionInfoValue>;

export type { UnitState,ConvertionInfoProps,ConvertionInfoValue, ValidUnits };
