import clsx from "clsx";

type MenuMobileProps = {
  btnNav: boolean;
  setBtnNav: (btnNav: boolean) => void;
};

const MenuMobile = ({ btnNav, setBtnNav }: MenuMobileProps) => {
  const menuToggle = () => {
    setBtnNav(!btnNav);
  };

  return (
    <section className="">
      <div
        className="relative w-12 inline-flex justify-center"
        onClick={menuToggle}
      >
        <button
          className={clsx("btn-nav-mobile transition-opacity duration-300", {
            "opacity-0": btnNav,
            "opacity-100 pointer-events-none": !btnNav,
          })}
        >
          Open
        </button>
        <button
          className={clsx(
            "btn-nav-mobile absolute inset-0 transition-opacity duration-150",
            {
              "opacity-100 pointer-events-none": btnNav,
              "opacity-0": !btnNav,
            }
          )}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default MenuMobile;
