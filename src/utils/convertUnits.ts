import type { ValidUnits } from "@/types";

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

const convertRemOrEmToPercent = (
  remOrEmValue: number,
  baseFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return ((remOrEmValue * referenceFontSize) / baseFontSize) * 100;
};

const convertPercentToRemOrEm = (
  percentValue: number,
  baseFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return (percentValue * baseFontSize) / (100 * referenceFontSize);
};

const convertRemToEm = (
  remValue: number,
  baseFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return (remValue * baseFontSize) / referenceFontSize;
};

const convertEmToRem = (
  emValue: number,
  baseFontSize: number,
  referenceFontSize?: number
): number => {
  if (!isNumber(referenceFontSize)) return 0;
  return (emValue * baseFontSize) / referenceFontSize;
};

const convertionMap: Record<
  string,
  (value: number, baseFontSize: number, referenceFontSize?: number) => number
> = {
  "px->rem": convertPxToRemOrEm,
  "rem->px": convertRemOrEmToPx,
  "px->em": convertPxToRemOrEm,
  "em->px": convertRemOrEmToPx,
  "%->px": convertPercentToPx,
  "px->%": convertPxToPercent,
  "rem->%": convertRemOrEmToPercent,
  "%->rem": convertPercentToRemOrEm,
  "em->rem": convertEmToRem,
  "rem->em": convertRemToEm,
};

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
    case "rem->%":
    case "%->rem": {
      return convertionMap[convertionType](value, rootFontSize, baseFontSize);
    }
    case "em->rem": {
      return convertionMap[convertionType](value, baseFontSize, rootFontSize);
    }
    case "rem->rem": {
      return convertionMap[convertionType](value, rootFontSize, baseFontSize);
    }
    default:
      return 0;
  }
};

export { convertUnits };

// conversion list
// rem/em -> px
// px -> rem/em
// % -> px
// px -> %
// rem/em -> %
// % -> rem/em
// rem -> em
// em -> rem
