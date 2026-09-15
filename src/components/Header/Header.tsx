import "./Header.css";
import logoPortal from "../../assets/logoPortal.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-img">
          <img src={logoPortal} alt="Logo do Portal Atacado" />
        </div>

        <div className="header-menu">
          <button className="header-button">Home</button>
          <button className="header-button">Sobre</button>
        </div>

      <div className="header-log"></div>
      </div>
    </>
  );
}

export default Header;