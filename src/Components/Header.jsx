import BackgroundImage from "./BackgroundImage";

const Header = () => {
  return (
    <header>
      <BackgroundImage />
      <h1 className="first-heading">
        World <span className="first-heading--thin">Analytics</span>
      </h1>
    </header>
  );
};

export default Header;
