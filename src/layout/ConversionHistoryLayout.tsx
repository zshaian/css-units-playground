import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ConversionHistoryLayoutProps {
  children: React.ReactNode;
}

const ConversionHistoryLayout: React.FC<ConversionHistoryLayoutProps> = (
  props
) => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  if (isDesktop) {
    return (
      <ScrollArea className="h-[100vh] border-r border-foreground">
        <section>{props.children}</section>
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
        <DrawerTitle className="sr-only">History</DrawerTitle>
        <DrawerDescription className="sr-only">this is a collection of conversion history</DrawerDescription>
        {props.children}
      </DrawerContent>
    </Drawer>
  );
};

export default ConversionHistoryLayout;
