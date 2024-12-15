import { useEffect, useState } from "react";
import { STORAGE_KEY } from "@/constants/storageKey";
import type { UnitState } from "@/types";

const useConversionHistory = (): [
  UnitState[],
  React.Dispatch<React.SetStateAction<UnitState[]>>
] => {
  const localConversionHistory = localStorage.getItem(STORAGE_KEY);
  const initialConversionHistory = localConversionHistory
    ? JSON.parse(localConversionHistory)
    : [];
  const [conversionHistory, setConversionHistory] = useState<UnitState[]>(
    initialConversionHistory
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(conversionHistory));
  }, [conversionHistory]);

  return [conversionHistory, setConversionHistory];
};

export { useConversionHistory };
