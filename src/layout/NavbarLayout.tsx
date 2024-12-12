interface NavbarLayoutProps {
    children:React.ReactNode;
}

const NavbarLayout:React.FC<NavbarLayoutProps> = (props) => (
    <nav className="p-5 flex items-center justify-start self-stretch gap-x-2 border-b border-b-input shadow-sm">
        {props.children}
    </nav>
)

export default NavbarLayout;