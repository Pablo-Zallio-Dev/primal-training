import imgAbout01m from "../../assets/images/about/img-about-01-M.webp";
import imgAbout01t from "../../assets/images/about/img-about-01-t.webp";
import imgAbout01d from "../../assets/images/about/img-about-01-d.webp";
import imgAbout02m from "../../assets/images/about/img-about-02-M.webp";
import imgAbout02t from "../../assets/images/about/img-about-02-t.webp";
import imgAbout02d from "../../assets/images/about/img-about-02-d.webp";

import imgAbout03m from "../../assets/images/about/img-about-03-M.webp";
import imgAbout03t from "../../assets/images/about/img-about-03-t.webp";
import imgAbout03d from "../../assets/images/about/img-about-03-d.webp";
import { Link } from "react-router-dom";

const GridAbout = () => {
  return (
    <section className="">
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:grid-rows-2 sm:h-[960px]">
        <picture className=" sm:order-2">
          <source media="(min-width: 1024px)" srcSet={imgAbout01d} />
          <source media="(min-width: 640px)" srcSet={imgAbout01t} />
          <img
            className="w-full h-full object-cover"
            src={imgAbout01m}
            alt="image of people fist bumping"
          />
        </picture>

        <section className=" xl:col-span-2 flex flex-col gap-12 sm:justify-between  p-5 xl:p-12 2xl:px-48 bg-blueSky">
          <h1 className=" font-anekTamil font-extrabold text-2xl sm:text-3xl uppercase leading-5 sm:leading-6 ">
            Tap into Your Primal Power. Forge a Stronger You.{" "}
          </h1>
          <section className="">
            <h2 className="font-anekTamil sm:text-[1.25rem] font-extrabold uppercase">
              our vision
            </h2>
            <p className=" text-[.8rem] sm:text-[.85rem]  leading-4 sm:leading-4.5">
              Primal Training is committed to delivering a training experience
              rooted in raw strength, functional fitness, and unwavering
              community support. We empower our members to tap into their primal
              power, achieve their goals, and live a life of strength,
              resilience, and unwavering determination.
            </p>
          </section>
        </section>

        <picture className=" xl:col-span-2 order-3">
          <source media="(min-width: 1024px)" srcSet={imgAbout02d} />
          <source media="(min-width: 640px)" srcSet={imgAbout02t} />
          <img
            className="w-full h-full object-cover"
            src={imgAbout02m}
            alt="Image of person deadlifting with a  barbell"
          />
        </picture>

        <section className=" flex flex-col gap-12 sm:justify-between order-3 p-5 xl:p-12 2xl:px-24">
          <h1 className=" font-anekTamil font-extrabold text-2xl uppercase leading-5 ">
            DYNAMIC OPEN GYM
          </h1>
          <section className="">
            <p className="text-[.8rem] sm:text-[.85rem]  leading-4 sm:leading-4.5">
              At Primal Training, we strip away the fluff and focus on the
              fundamentals. Our expert coaches guide you through intense,
              functional workouts designed to build raw strength, resilience,
              and a body capable of anything.
            </p>
          </section>
        </section>
      </section>
      <section className="">
        <picture className=" sm:order-2">
          <source media="(min-width: 1024px)" srcSet={imgAbout03d} />
          <source media="(min-width: 640px)" srcSet={imgAbout03t} />
          <img
            className="w-full h-full object-cover"
            src={imgAbout03m}
            alt="Image of woman working out"
          />
        </picture>
      </section>
      <section
        id="reserve"
        className=" flex flex-col justify-center items-center gap-7 py-32 bg-grey"
      >
        <p className=" lg:text-2xl uppercase ">WHAT WE BELIEVE IN</p>
        <p className=" font-anekTamil font-extrabold text-4xl lg:text-8xl text-center tracking-tighter  uppercase">
          Join the Primal Tribe Today!
        </p>
        <a href="" className="p-5  flex h-full items-center justify-center ">
          <Link className="  btn-page rounded-lg" to="/reserve">
            reserve your spot
          </Link>
        </a>
      </section>
    </section>
  );
};

export default GridAbout;
