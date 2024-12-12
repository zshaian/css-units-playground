interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <>
      <main className="flex flex-col gap-y-8 lg:flex-row">
          {props.children}
      </main>
    </>
  );
};

export default MainLayout;
