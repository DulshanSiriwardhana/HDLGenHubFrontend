
import homeimage from "../../images/Ico.jpg";
import notes from "../../images/notes.png";
import settings from "../../images/settings.png";
import world from "../../images/world.png";
import work from "../../images/work.png";

const HomePage =()=>{
    return(
        <div className="flex flex-col mt-2 bg-white">
      <div className="flex flex-col md:flex-row items-center pb-0 p-5">
        <div className="md:w-1/2 text-left md:ml-32 mt-10">
          <h3 className="font-bold md:text-2xl text-sm md:p-5 p-1">
            <span style={{ color: "orange" }}>HDL</span> Gen Hub{" "}
            <span className="font-thin">for learners</span>
          </h3>
          <h1 className="font-extrabold lg:text-7xl md:p-3 p-1 text-5xl">
            Fast & <span style={{ color: "orange" }}>Easiest</span>
          </h1>
          <h1 className="font-extrabold lg:text-6xl md:p-3 p-1 text-5xl">
            Way to Learn
          </h1>
          <h1 className="font-extrabold lg:text-7xl md:p-3 p-1 text-5xl">
            <span style={{ color: "orange" }}>HDL</span>
          </h1>
        </div>
        <img
          src={homeimage}
          alt="Home"
          className="lg:h-96 h-52 mt-10 md:mt-0 md:mr-20"
        />
      </div>
      <div className="h-0.5 bg-gray-200"></div>
      <p className="font-bold text-xl text-center md:m-14 m-10 md:mb-0 md:mt-20 mb-0">
        Exclusive content, exceptional quality
      </p>
      <div className="text-center md:m-10 md:ml-36 md:mr-36 m-5 mb-16">
        <p className="md:text-base text-gray-500 text-justify">
          Unlock the world of HDLs through our immersive e-learning platform.
          From beginner basics to advanced techniques, dive into digital design
          at your own pace. Engage, practice, and connect in a community-driven
          space designed for mastering hardware description languages.
        </p>
      </div>

      <div className="md:flex md:justify-around md:flex-row flex flex-col gap-16 text-center items-center md:m-20 md:mt-10 mt-0 mb-10">
        <div className="transform transition duration-300 ease-in-out w-96 h-52 bg-gray-100 rounded-ss-3xl rounded-ee-3xl hover:scale-110 flex justify-center flex-col shadow-lg">
          <p className="text-3xl font-bold text-amber-500 m-5">100+</p>
          <p className="md:text-xl sm:text-base font-extralight m-5 mt-0">
            hours of content to gain knowledge <br />
            (updating regularly)
          </p>
        </div>
        <div className="transform transition duration-300 ease-in-out w-96 h-52 bg-gray-100 rounded-ss-3xl rounded-ee-3xl hover:scale-110 flex justify-center flex-col shadow-lg">
          <p className="text-3xl font-bold text-amber-500 m-9 mb-3">100+</p>
          <p className="md:text-xl sm:text-base font-extralight m-10 mt-0">
            experts from the university with the best guidance
          </p>
        </div>
        <div className="transform transition duration-300 ease-in-out w-96 h-52 bg-gray-100 rounded-ss-3xl rounded-ee-3xl hover:scale-110 flex justify-center flex-col shadow-lg">
          <p className="text-3xl sm:text-2xl sm:mb-0 font-bold text-amber-500 m-5 mb-3">350+</p>
          <p className="md:text-xl sm:text-base font-extralight m-7 mt-0">
            users unleashing their potential through E-Learning excellence
          </p>
        </div>
      </div>
      <div></div>
      <div className="bg-black md:h-80 h-auto md:rounded-ss-3xl md:rounded-t-3xl rounded-ss-2xl rounded-t-2xl mt-10 p-5">
        <h1 className="text-white md:m-12 m-10 md:text-2xl text-lg font-bold text-center">
          Job-ready talent, Superior outcomes
        </h1>
        <div class="flex text-white justify-around">
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={notes} alt="note" class="md:w-20 mb-5 md:h-20" />
            <p>Curriculum co-created with industry leaders</p>
          </div>
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={settings} alt="note" class="w-20 mb-5" />
            <p>Personalized feedback ensures mastery</p>
          </div>
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={work} alt="note" class="w-20 mb-5" />
            <p>Hands-on projects, not step-by-step guides</p>
          </div>
          <div class="md:flex md:w-60 gap-5 w-20 m-2">
            <img src={world} alt="note" class="w-20 mb-5" />
            <p class="mt-2">10+ highly vetted expert network</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default HomePage;