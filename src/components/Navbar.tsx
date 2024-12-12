import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => (
  <>
    <a href="https://github.com/zshaian/css-unit-playground" className="p-2 border border-input rounded-full hover:bg-muted" title="github">
      <Github size={20} />
    </a>
    <ThemeToggle />
  </>
);

export default Navbar;
