import { ConvertionInfoProps, ConvertionInfoValue, ValidUnits } from "@/types";

interface getConvertionInfoProps {
  from: ValidUnits;
  to: ValidUnits;
}

const getConvertionInfo = ({
  from,
  to,
}: getConvertionInfoProps): ConvertionInfoValue => {
  const convertionInfo: ConvertionInfoProps = {
    "px->rem": {
      fromUnit: "px",
      toUnit: "rem",
      formula: "REM = PX / Root-Font-Size",
      calculation: "16px / 16px = 1rem",
    },
    "rem->px": {
      fromUnit: "rem",
      toUnit: "px",
      formula: "PX = REM * Root-Font-Size",
      calculation: "1rem * 16px = 16px",
    },

    "px->em": {
      fromUnit: "px",
      toUnit: "em",
      formula: "EM = PX / Base-Font-Size",
      calculation: "16px / 16px = 1em",
    },
    "em->px": {
      fromUnit: "em",
      toUnit: "px",
      formula: "PX = EM * Base-Font-Size",
      calculation: "1em * 16px = 16px",
    },

    "px->%": {
      fromUnit: "px",
      toUnit: "%",
      formula: "% = (PX / Base-Font-Size) * 100",
      calculation: "16px / 16px * 100 = 100%",
    },
    "%->px": {
      fromUnit: "%",
      toUnit: "px",
      formula: "PX = % * Base-Font-Size",
      calculation: "100% * 16px = 16px",
    },

    "rem->em": {
      fromUnit: "rem",
      toUnit: "em",
      formula: "EM = REM * (Base-Font-Size / Root-Font-Size)",
      calculation: "1rem * (16px / 16px) = 1em",
    },
    "em->rem": {
      fromUnit: "em",
      toUnit: "rem",
      formula: "REM = EM * (Base-Font-Size / Root-Font-Size)",
      calculation: "1em * (16px / 16px) = 1rem",
    },

    "rem->%": {
      fromUnit: "rem",
      toUnit: "%",
      formula: "% = ((REM * Root-Font-Size) / Base-Font-Size) * 100",
      calculation: "( (1rem * 16px) / 16px ) * 100 = 100%",
    },
    "%->rem": {
      fromUnit: "%",
      toUnit: "rem",
      formula: "REM = (% * Base-Font-Size) / (100 * Root-Font-Size)",
      calculation: "(100% * 16px) / (100 * 16px) = 1rem",
    },

    "em->%": {
      fromUnit: "em",
      toUnit: "%",
      formula: "EM = (EM * Base-Font-Size) / Base-Font-Size) * 100",
      calculation: "((1em * 16px) / 16px) * 100 = 100%",
    },
    "%->em": {
      fromUnit: "%",
      toUnit: "em",
      formula: "EM = (% * Base-Font-Size) / (100 * Base-Font-Size)",
      calculation: "(100% * 16px) / (100 * 16px) = 1em",
    },
  };
  return convertionInfo[`${from}->${to}`];
};

export { getConvertionInfo };