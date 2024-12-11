import type { ConvertionInfoKeys, ValidUnits } from "@/types";

interface ConvertUnitProps {
  value: number;
  fromUnit: ValidUnits;
  toUnit: ValidUnits;
  rootFontSize: number;
  baseFontSize: number;
}

const isNumber = (value?: number): value is number => typeof value === "number";

const convertPxToRemOrEm = (pxValue: number, baseFontSize: number): number =>
  pxValue / baseFontSize;

const convertRemOrEmToPx = (
  remOrEmValue: number,
  baseFontSize: number
): number => remOrEmValue * baseFontSize;

const convertPercentToPx = (
  percentValue: number,
  baseFontSize: number
): number => (percentValue * baseFontSize) / 100;

const convertPxToPercent = (pxValue: number, baseFontSize: number): number =>
  (pxValue / baseFontSize) * 100;

const convertRemToPercent = (
  remValue: number,
  rootFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return ((remValue * rootFontSize) / referenceFontSize) * 100;
};

const convertPercentToRem = (
  percentValue: number,
  rootFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return (percentValue * referenceFontSize) / (100 * rootFontSize);
};

const convertEmToPercent = (emValue: number, baseFontSize: number): number => {
  return ((emValue * baseFontSize) / baseFontSize) * 100;
};

const convertPercentToEm = (
  percentValue: number,
  baseFontSize: number
): number => {
  return (percentValue * baseFontSize) / (100 * baseFontSize);
};

const convertRemToEm = (
  remValue: number,
  baseFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return remValue * (baseFontSize / referenceFontSize);
};

const convertEmToRem = (
  emValue: number,
  baseFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return emValue * (baseFontSize / referenceFontSize);
};

const convertionMap: Record<
  ConvertionInfoKeys,
  (value: number, baseFontSize: number, referenceFontSize?: number) => number
> = {
  "px->rem": convertPxToRemOrEm,
  "rem->px": convertRemOrEmToPx,
  "px->em": convertPxToRemOrEm,
  "em->px": convertRemOrEmToPx,
  "%->px": convertPercentToPx,
  "px->%": convertPxToPercent,
  "rem->%": convertRemToPercent,
  "%->rem": convertPercentToRem,
  "em->%": convertEmToPercent,
  "%->em": convertPercentToEm,
  "em->rem": convertEmToRem,
  "rem->em": convertRemToEm,
};

const roundownToTwoDecimals = (value: number): number =>
  Math.round(value * 100) / 100;

const convertUnits = ({
  value,
  fromUnit,
  toUnit,
  rootFontSize,
  baseFontSize,
}: ConvertUnitProps): number => {
  const convertionType = `${fromUnit}->${toUnit}`;
  switch (convertionType) {
    case "px->rem":
    case "rem->px": {
      return convertionMap[convertionType](value, rootFontSize);
    }
    case "px->em":
    case "em->px": {
      return convertionMap[convertionType](value, baseFontSize);
    }
    case "%->px":
    case "px->%": {
      return convertionMap[convertionType](value, baseFontSize);
    }
    case "em->%":
    case "%->em": {
      return convertionMap[convertionType](value, baseFontSize);
    }
    case "rem->%":
    case "%->rem": {
      return convertionMap[convertionType](value, rootFontSize,baseFontSize);
    }
    case "em->rem": {
      return convertionMap[convertionType](value, baseFontSize, rootFontSize);
    }
    case "rem->em": {
      return convertionMap[convertionType](value, rootFontSize, baseFontSize);
    }
    default:
      return 0;
  }
};

export { convertUnits, roundownToTwoDecimals };

// conversion list
// px -> rem
// rem -> px

// px -> em 
// em -> px

// px -> %
// % -> px

// rem -> %
// % -> rem

// rem -> em
// em -> rem

// em -> %
// % -> em