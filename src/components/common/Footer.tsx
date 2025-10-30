import React from "react";
import Logo from "../../assets/images/logo-footer.png";
import Slogan from "../../assets/images/slogan-footer.svg";
const Footer = () => {
  return (
    <section className=" bg-gray flex flex-col  gap-20 py-14 lg:px-10">
      <section className="flex flex-col sm:flex-row justify-between gap-7 p-5">
        <img className="w-40" src={Logo} alt="" />
        <img className="w-80" src={Slogan} alt="" />
      </section>
      <section className="flex flex-col md:flex-row md:justify-between gap-10 px-5">
        <article className="flex flex-col gap-4">
          <h4 className="font-anekTamil font-extrabold text-2xl uppercase">
            contact
          </h4>
          <article className="">
            <p className="font-bold">Email: hello@figma.com</p>
            <p className="font-bold">Phone: (203) 555-5555</p>
          </article>
        </article>

        <article className="flex flex-col gap-4">
          <h4 className="font-anekTamil font-extrabold text-2xl uppercase">
            Opening Hours
          </h4>
          <article className="flex gap-15">
            <article className=" font-extrabold uppercase">
              <p>mon - fri</p>
              <p>saturdays</p>
              <p>sundays</p>
              <p>holidays</p>
            </article>
            <article className="font-extrabold uppercase">
              <p>5:00 - 23:00</p>
              <p>8:00 - 16:00</p>
              <p>8:00 - 13:00</p>
              <p>8:00 - 16:00</p>
            </article>
          </article>
        </article>

        <article className="flex flex-col gap-4">
          <h4 className="font-anekTamil font-extrabold text-2xl uppercase">
            social
          </h4>
          <article className="flex flex-col font-extrabold">
            <a href="">Instagram</a>
            <a href="">X</a>
            <a href="">Linkedin</a>
            <a href="">Spotify</a>
          </article>
        </article>
      </section>
    </section>
  );
};

export default Footer;
