import { Sun,Moon } from "lucide-react";
import { ThemeProviderContext } from "@/context/ThemeProviderContext";
import { useContext } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const ThemeToggle:React.FC = () => {
    const [theme,setTheme] = useContext(ThemeProviderContext);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    {(theme === "light") ? <Sun size={20} /> : <Moon size={20} />}
                    <p className="inline-block">{theme.toUpperCase()}</p>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setTheme("light")}> 
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}> 
                    Dark 
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}> 
                    System 
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeToggle;