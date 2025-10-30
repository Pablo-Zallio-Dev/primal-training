import { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.png";
import MenuDesktop from "../common/MenuDesktop";
import MenuMobile from "../common/MenuMobile";
import LinksMobile from "./LinksMobile";
import useIsMobile from "../../hooks/useIsMobile";

const Header = () => {
  const [btnNav, setBtnNav] = useState(false);

  const isMobile = useIsMobile(768);

  useEffect(() => {
    if (!isMobile) setBtnNav(false);
  }, [isMobile]);

  return (
    <header>
      <section className="relative border-b z-30 flex items-center justify-between bg-grey py-6 px-5 bg-gray">
        <img className="w-[180px]" src={logo} alt="Company Logo" />
        {isMobile ? (
          <MenuMobile btnNav={btnNav} setBtnNav={setBtnNav} />
        ) : (
          <MenuDesktop />
        )}
      </section>

      {isMobile && <LinksMobile btnNav={btnNav} setBtnNav={setBtnNav} />}
    </header>
  );
};

export default Header;
