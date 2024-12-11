interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <>
      <main className="flex md:flex-row max-sm:flex-col max-sm:gap-y-8">
        <section className="flex flex-col items-center justify-center flex-1 gap-y-8">
          {props.children}
        </section>
      </main>
    </>
  );
};

export default MainLayout;
