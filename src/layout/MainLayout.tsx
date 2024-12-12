interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <>
      <main className="flex flex-col lg:flex-row">
          {props.children}
      </main>
    </>
  );
};

export default MainLayout;
