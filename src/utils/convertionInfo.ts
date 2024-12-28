import {
  ConvertionFormulaValue,
  ConvertionInfoValue,
  ValidUnits,
} from "@/types";

interface getConvertionInfoProps {
  from: ValidUnits;
  to: ValidUnits;
}

type ConvertionItemsProps = {
  [key in ValidUnits]: Record<ValidUnits, ConvertionFormulaValue>;
};

const getConvertionInfo = ({
  from,
  to,
}: getConvertionInfoProps): ConvertionInfoValue => {
  const convertionItems: ConvertionItemsProps = {
    px: {
      px: {
        formula: "PX = PX",
        calculation: "16PX = 16PX",
      },
      rem: {
        formula: "REM = PX / Root-Font-Size",
        calculation: "16px / 16px = 1rem",
      },
      em: {
        formula: "EM = PX / Base-Font-Size",
        calculation: "16px / 16px = 1em",
      },
      "%": {
        formula: "% = (PX / Base-Font-Size) * 100",
        calculation: "(16px / 16px * 100) = 100%",
      },
      vw: {
        formula: "VW = (PX / VIEWPORTWIDTH) * 100",
        calculation: "(16px / 1280px) * 100 = 1.25vw",
      },
      vh: {
        formula: "VH = (PX / VIEWPORTHEIGHT) * 100",
        calculation: "(16px / 743px) * 100 = 2.15vh",
      },
      vmin: {
        formula: "VMIN = (PX / VMIN) * 100",
        calculation: "(16px / 743px) * 100 = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = (PX / VMAX) * 100",
        calculation: "(16px / 1280px) * 100 = 1.25vmax",
      },
    },
    rem: {
      px: {
        formula: "PX = REM * Root-Font-Size",
        calculation: "1rem * 16px = 16px",
      },
      rem: {
        formula: "REM = REM",
        calculation: "1rem = 1rem",
      },
      em: {
        formula: "EM = REM * (Root-Font-Size / Base-Font-Size)",
        calculation: "1rem * (16px / 16px) = 1em",
      },
      "%": {
        formula: "% = ((REM * Root-Font-Size) / Base-Font-Size) * 100",
        calculation: "( (1rem * 16px) / 16px ) * 100 = 100%",
      },
      vw: {
        formula: "VW = (REM * Root-Font-Size / VIEWPORTWIDTH) * 100",
        calculation: "(1rem * 16px / 1280px) * 100 = 1.25vw",
      },
      vh: {
        formula: "VH = (REM * Root-Font-Size / VIEWPORTHEIGHT) * 100",
        calculation: "(1rem * 16px / 743px) * 100 = 2.15vh",
      },
      vmin: {
        formula: "VMIN = (REM * Root-Font-Size / VMIN) * 100",
        calculation: "(1rem * 16px / 743px) * 100 = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = (REM * Root-Font-Size / VMAX) * 100",
        calculation: "(1rem * 16px / 1280px) * 100 = 1.25vmax",
      },
    },
    em: {
      px: {
        formula: "PX = EM * Base-Font-Size",
        calculation: "1em * 16px = 16px",
      },
      rem: {
        formula: "REM = EM * (Base-Font-Size / Root-Font-Size)",
        calculation: "1em * (16px / 16px) = 1rem",
      },
      em: {
        formula: "EM = EM",
        calculation: "1em = 1em",
      },
      "%": {
        formula: "% = ((REM * Base-Font-Size) / Base-Font-Size) * 100",
        calculation: "((1em * 16px) / 16px) * 100 = 100%",
      },
      vw: {
        formula: "VW = (EM * Base-Font-Size / VIEWPORTWIDTH) * 100",
        calculation: "(1em * 16px / 1280px) * 100 = 1.25vw",
      },
      vh: {
        formula: "VH = (EM * Base-Font-Size / VIEWPORTHEIGHT) * 100",
        calculation: "(1em * 16px / 743px) * 100 = 2.15vh",
      },
      vmin: {
        formula: "VMIN = (EM * Base-Font-Size / VMIN) * 100",
        calculation: "(1em * 16px / 743px) * 100 = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = (EM * Base-Font-Size / VMAX) * 100",
        calculation: "(1em * 16px / 1280px) * 100 = 1.25vmax",
      },
    },
    "%": {
      px: {
        formula: "PX = % * Base-Font-Size / 100",
        calculation: "100% * 16px / 100 = 16px",
      },
      rem: {
        formula: "REM = % * (Base-Font-Size / Root-Font-Size) / 100",
        calculation: "100% * (16px / 16px) / 100 = 1rem",
      },
      em: {
        formula: "EM = % / 100",
        calculation: "100% / 100 = 1em",
      },
      "%": {
        formula: "% = %",
        calculation: "100% = 100%",
      },
      vw: {
        formula: "VW = (% * Base-Font-Size / VIEWPORTWIDTH)",
        calculation: "(100% * 16px / 1280px) = 1.25vw",
      },
      vh: {
        formula: "VH = (% * Base-Font-Size / VIEWPORTHEIGHT)",
        calculation: "(100% * 16px / 743px) = 2.15vh",
      },
      vmin: {
        formula: "VMIN = (% * Base-Font-Size / VMIN)",
        calculation: "(100% * 16px / 743px) = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = (% * Base-Font-Size / VMAX)",
        calculation: "(100% * 16px / 1280px) = 1.25vmax",
      },
    },
    vw: {
      px: {
        formula: "PX = VW * VIEWPORTWIDTH / 100",
        calculation: "1.25vw * 1280px / 100 = 16px",
      },
      rem: {
        formula: "REM = (VW * VIEWPORTWIDTH / Root-Font-Size) / 100",
        calculation: "(1.25vw * 1280px / 16px) / 100 = 1rem",
      },
      em: {
        formula: "EM = (VW * VIEWPORTWIDTH / Base-Font-Size) / 100",
        calculation: "(1.25vw * 1280px / 16px) / 100 = 1em",
      },
      "%": {
        formula: "% = (VW * VIEWPORTWIDTH / Base-Font-Size)",
        calculation: "(1.25vw * 1280px / 16px) = 100%",
      },
      vw: {
        formula: "VW = VW",
        calculation: "1.25vw = 1.25vw",
      },
      vh: {
        formula: "VH = (VW * VIEWPORTWIDTH / VIEWPORTHEIGHT)",
        calculation: "(1.25vw * 1280px / 743px) = 2.15vh",
      },
      vmin: {
        formula: "VMIN = (VW * VIEWPORTWIDTH / VMIN)",
        calculation: "(1.25vw * 1280px / 743px) = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = (VW * VIEWPORTWIDTH / VMAX)",
        calculation: "(1.25vw * 1280px / 1280px) = 1.25vmax",
      },
    },
    vh: {
      px: {
        formula: "PX = VH * VIEWPORTHEIGHT / 100",
        calculation: "2.15vh * 743px / 100 = 16px",
      },
      rem: {
        formula: "REM = (VH * VIEWPORTHEIGHT / Root-Font-Size) / 100",
        calculation: "(2.15vh * 743px / 16px) / 100 = 1rem",
      },
      em: {
        formula: "EM = (VH * VIEWPORTHEIGHT / Base-Font-Size) / 100",
        calculation: "(2.15vh * 743px / 16px) / 100 = 1em",
      },
      "%": {
        formula: "% = (VH * VIEWPORTHEIGHT / Base-Font-Size)",
        calculation: "(2.15vh * 743px / 16px) = 100%",
      },
      vw: {
        formula: "VW = (VH * VIEWPORTHEIGHT / VIEWPORTWIDTH)",
        calculation: "(2.15vh * 743px / 1280px) = 1.25vw",
      },
      vh: {
        formula: "VH = VH",
        calculation: "2.15vh = 2.15vh",
      },
      vmin: {
        formula: "VMIN = (VH * VIEWPORTHEIGHT / VMIN)",
        calculation: "(2.15vh * 743px / 743px) = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = (VH * VIEWPORTHEIGHT / VMAX)",
        calculation: "(2.15vh * 743px / 1280px) = 1.25vmax",
      },
    },
    vmin: {
      px: {
        formula: "PX = VMIN * VMIN / 100",
        calculation: "2.15vmin * 743px / 100 = 16px",
      },
      rem: {
        formula: "REM = (VMIN * VMIN / Root-Font-Size) / 100",
        calculation: "(2.15vmin * 743px / 16px) / 100 = 1rem",
      },
      em: {
        formula: "EM = (VMIN * VMIN / Base-Font-Size) / 100",
        calculation: "(2.15vmin * 743px / 16px) / 100 = 1em",
      },
      "%": {
        formula: "% = (VMIN * VMIN / Base-Font-Size)",
        calculation: "(2.15vmin * 743px / 16px) = 100%",
      },
      vw: {
        formula: "VW = (VMIN * VMIN / VIEWPORTWIDTH)",
        calculation: "(2.15vmin * 743px / 1280px) = 1.25vw",
      },
      vh: {
        formula: "VH = (VMIN * VMIN / VIEWPORTHEIGHT)",
        calculation: "(2.15vmin * 743px / 743px) = 2.15vh",
      },
      vmin: {
        formula: "VMIN = VMIN",
        calculation: "2.15vmin = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = (VMIN * VMIN / VMAX)",
        calculation: "(2.15vmin * 743px / 1280px) = 1.25vmax",
      },
    },
    vmax: {
      px: {
        formula: "PX = VMAX * VMAX / 100",
        calculation: "1.25vmax * 1280px / 100 = 16px",
      },
      rem: {
        formula: "REM = (VMAX * VMAX / Root-Font-Size) / 100",
        calculation: "(1.25vmax * 1280px / 16px) / 100 = 1rem",
      },
      em: {
        formula: "EM = (VMAX * VMAX / Base-Font-Size) / 100",
        calculation: "(1.25vmax * 1280px / 16px) / 100 = 1em",
      },
      "%": {
        formula: "% = (VMAX * VMAX / Base-Font-Size)",
        calculation: "(1.25vmax * 1280px / 16px) = 100%",
      },
      vw: {
        formula: "VW = (VMAX * VMAX / VIEWPORTWIDTH)",
        calculation: "(1.25vmax * 1280px / 1280px) = 1.25vw",
      },
      vh: {
        formula: "VH = (VMAX * VMAX / VIEWPORTHEIGHT)",
        calculation: "(1.25vmax * 1280px / 743px) = 2.15vh",
      },
      vmin: {
        formula: "VMIN = (VMAX * VMAX / VMIN)",
        calculation: "(1.25vmax * 1280px / 743px) = 2.15vmin",
      },
      vmax: {
        formula: "VMAX = VMAX",
        calculation: "1.25vmax = 1.25vmax",
      },
    },
  };

  return { fromUnit: from, toUnit: to, ...convertionItems[from][to] };
};

export { getConvertionInfo };
