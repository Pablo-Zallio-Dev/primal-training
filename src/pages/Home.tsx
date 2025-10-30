//import React from "react";

import imageWorkingMobile from "../assets/images/home/image-working-mobile.webp";
import imageWomanDesktop from "../assets/images/home/image-woman-desktop.webp";
import imageWomanMobile from "../assets/images/home/image-woman-mobile.webp";
import imageTrainingTablet from "../assets/images/home/image-training-tablet.webp";
import imageTrainingDesktop from "../assets/images/home/image-training-desktop.webp";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className=" bg-gray">
        <section className=" title-section ">
          <h1>
            train hard. <span className="text-blueSky">live better</span>
          </h1>
        </section>
        <section className=" grid grid-cols-1 sm:grid-cols-3 justify-items-center min-[799px]:grid-cols-3 ">
          <img
            className=" sm:col-span-2 w-full h-full object-cover"
            src={imageWorkingMobile}
            alt="Image of people doing squat workouts"
            loading="lazy"
          />

          <section className=" flex flex-col justify-between w-full p-5 lg:p-6 sm:border-t">
            <h2 className="title-home-grid ">for the commited</h2>
            <section className=" flex flex-col justify-between ">
              <p className="text-home-grid">
                Train like an athlete with top-tier equipment and expert
                programming. Whether you're building muscle or breaking PRs, we
                help you push past limits.
              </p>
              <Link to="/reserve" className=" w-max btn-page--class">
                about us
              </Link>
            </section>
          </section>
          <picture className=" sm:order-2">
            <source media="(min-width: 1024px)" srcSet={imageWomanDesktop} />
            <img
              className=" sm:order-1 w-full  object-cover"
              src={imageWomanMobile}
              alt="Image of woman working out"
              loading="lazy"
            />
          </picture>
          <section className=" flex flex-col justify-between  p-5 lg:p-10 border-b ">
            <h2 className="title-home-grid">Guided by experts</h2>
            <p className="text-home-grid">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </section>

          <section className=" flex flex-col justify-between  p-5 lg:p-10 border-b sm:border-s ">
            <h2 className="title-home-grid">DYNAMIC OPEN GYM</h2>
            <p className="text-home-grid">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </section>
        </section>
        <section className="font-anekTamil border-b p-3 bg-white text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black uppercase -tracking-[0.2rem]">
          <h2>
            join the <span className="text-blueSky">community</span>
          </h2>
        </section>
        <section className="sm:flex justify-between">
          <picture className="xl:grow sm:order-1">
            <source media="(min-width: 1024px)" srcSet={imageTrainingDesktop} />
            <source media="(min-width: 640px)" srcSet={imageTrainingTablet} />
            <img
              className="w-full h-full  object-cover"
              src={imageTrainingTablet}
              alt="Image of person squatting with a barbell"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <section className="grow xl:grow-0 flex flex-col">
            <h3 className=" title-home-grid p-5 border-b sm:border-t-0 ">
              DISCOVER YOUR POTENTIAL
            </h3>
            <article className="border-b p-5 xl:py-10">
              <h4 className="  font-anekTamil text-[1.25rem] lg:text-[1.5rem] xl:text-3xl tracking-tighter font-extrabold uppercase ">
                Expert Coaching
              </h4>
              <p className=" xl:mt-2 text-[.8rem] lg:text-[1rem] xl:text-[1.25rem]  ">
                Trainers who are passionate about your progress.
              </p>
            </article>
            <article className="border-b p-5 xl:py-10">
              <h4 className="  font-anekTamil text-[1.25rem] lg:text-[1.5rem] xl:text-3xl tracking-tighter font-extrabold uppercase ">
                Results-Driven Programs
              </h4>
              <p className=" xl:mt-2 text-[.8rem] lg:text-[1rem] xl:text-[1.25rem]  ">
                Workouts that deliver tangible, measurable results.
              </p>
            </article>
            <article className="border-b p-5 xl:py-10">
              <h4 className="  font-anekTamil text-[1.25rem] lg:text-[1.5rem] xl:text-3xl tracking-tighter font-extrabold uppercase ">
                A Supportive Tribe
              </h4>
              <p className=" xl:mt-2 text-[.8rem] lg:text-[1rem] xl:text-[1.25rem]  ">
                A community that pushes you to be your best.
              </p>
            </article>
            <Link to="/about" className=" btn-page--class  ">
              View classes
            </Link>
          </section>
        </section>

        <section
          id="reserve"
          className=" flex flex-col justify-center items-center gap-7 py-32 bg-blueSky"
        >
          <h4 className=" lg:text-2xl uppercase ">WHAT WE BELIEVE IN</h4>
          <h5 className=" font-anekTamil font-extrabold text-4xl lg:text-8xl text-center tracking-tighter  uppercase">
            Join the Primal Tribe Today!
          </h5>
          <a href="" className="p-5  flex h-full items-center justify-center ">
            <button className="  btn-page--gray">reserve your spot</button>
          </a>
        </section>
      </section>
    </>
  );
};

export default Home;
