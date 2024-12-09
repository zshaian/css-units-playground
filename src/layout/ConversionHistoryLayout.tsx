import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import ConversionHistory from "@/components/ConversionHistory";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ConversionHistoryLayout: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width:768px)");
  const dummyConversionHistoryList = [
    {
      from: 5,
      fromUnit: "rem",
      to: 80,
      toUnit: "px",
      rootFontSize: "16px",
    },
    {
      from: 5,
      fromUnit: "rem",
      to: 80,
      toUnit: "px",
      rootFontSize: "16px",
    },
    {
      from: 5,
      fromUnit: "rem",
      to: 80,
      toUnit: "px",
      rootFontSize: "16px",
    },
    {
      from: 5,
      fromUnit: "rem",
      to: 80,
      toUnit: "px",
      rootFontSize: "16px",
    },
    {
      from: 5,
      fromUnit: "rem",
      to: 80,
      toUnit: "px",
      rootFontSize: "16px",
    },
    {
      from: 5,
      fromUnit: "rem",
      to: 80,
      toUnit: "px",
      rootFontSize: "16px",
    },
  ];

  if (isDesktop) {
    return (
      <ScrollArea className="h-[100vh] border-r border-foreground">
        <section>
          <ConversionHistory
            conversionHistoryList={dummyConversionHistoryList}
          />
        </section>
      </ScrollArea>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-max m-4">
          History
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <ConversionHistory conversionHistoryList={dummyConversionHistoryList} />
      </DrawerContent>
    </Drawer>
  );
};

export default ConversionHistoryLayout;
