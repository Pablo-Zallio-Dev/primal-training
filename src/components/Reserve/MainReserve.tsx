import { Link } from "react-router-dom";
const MainReserve = () => {
  return (
    <section className="">
      <section className=" sm:flex bg-gray border-y ">
        <section className=" flex flex-col sm:justify-between gap-7 p-5 xl:px-24 2xl:py-18">
          <section className="flex flex-col gap-28 justify-between">
            <h2 className=" font-anekTamil font-extrabold text-2xl uppercase ">
              strength
            </h2>
            <section className="flex flex-col gap-6">
              <p className="border-b">Weekdays at 6AM</p>
              <p className="border-b">Weekends and Holidays at 8AM</p>
              <p className="text-[.85rem]">
                Build a foundation of raw power with our comprehensive
                weightlifting and strength training programs.{" "}
              </p>
            </section>
          </section>
          <button className="btn-page rounded-lg">reserve your spot</button>
        </section>

        <section className=" flex flex-col sm:justify-between gap-7 p-5 xl:px-24 2xl:py-18 sm:border-x">
          <section className="flex flex-col gap-28 justify-between">
            <h2 className=" font-anekTamil font-extrabold text-2xl uppercase ">
              conditioning
            </h2>
            <section className="flex flex-col gap-6">
              <p className="border-b">Weekdays at 8AM</p>
              <p className="border-b">Weekends and Holidays at 10AM</p>
              <p className="text-[.85rem]">
                Push your limits with high-intensity workouts that challenge
                your cardiovascular endurance and build functional fitness.{" "}
              </p>
            </section>
          </section>
          <button className="btn-page rounded-lg">reserve your spot</button>
        </section>

        <section className=" flex flex-col sm:justify-between gap-7 p-5 xl:px-10 2xl:py-18">
          <section className="flex flex-col gap-28 justify-between">
            <h2 className=" font-anekTamil font-extrabold text-2xl uppercase ">
              COMMUNITY CLASSES
            </h2>
            <section className="flex flex-col gap-6">
              <p className="border-b">Every day on the hour</p>
              <p className="text-[.85rem]">
                Experience the power of collective effort with our custom
                Workout of the Day. Push your limits alongside like-minded
                individuals.
              </p>
            </section>
          </section>
          <button className="btn-page rounded-lg">reserve your spot</button>
        </section>
      </section>
      <section className=" flex flex-col justify-center items-center gap-7 py-32 px-10 bg-blueSky ">
        <p className=" font-anekTamil font-extrabold text-4xl lg:text-8xl text-center tracking-tighter  uppercase">
          Primal Personal Training
        </p>
        <p className=" lg:text-2xl text-center xl:px-64">
          Receive personalized guidance and tailored programs designed to unlock
          your individual primal potential. Our expert coaches will guide you
          every step of the way.
        </p>
        <a href="" className="p-5  flex h-full items-center justify-center ">
          <Link className="btn-page--gray" to="/reserve">
            reserve your spot
          </Link>
        </a>
      </section>
    </section>
  );
};

export default MainReserve;
