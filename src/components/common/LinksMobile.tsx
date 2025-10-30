import clsx from "clsx";
import { Link } from "react-router-dom";

type LinksMobileProps = {
  btnNav: boolean;
  setBtnNav: (btnNav: boolean) => void;
};

const LinksMobile = ({ btnNav, setBtnNav }: LinksMobileProps) => {
  const menuToggle = () => {
    setBtnNav(!btnNav);
  };

  return (
    <nav
      className={clsx(
        "absolute w-full top-[73px] left-0 flex flex-col bg-white transition-transform duration-500",
        {
          "translate-y-0 top-[73px]": btnNav,
          "-translate-y-[calc(100%+73px)]": !btnNav,
        }
      )}
    >
      <Link className="links-nav-mobile" to="/" onClick={menuToggle}>
        home
      </Link>
      <Link className="links-nav-mobile" to="/about" onClick={menuToggle}>
        about
      </Link>
      <Link
        className="links-nav-mobile btn-page transform duration-200"
        to="/reserve"
        onClick={menuToggle}
      >
        reserve your spot
      </Link>
    </nav>
  );
};

export default LinksMobile;
