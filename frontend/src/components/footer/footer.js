import "./footer.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white bottom-0 ">
      <div className="flex justify-around lg:gap-5 md:p-10 p-5">
        <div className="md:flex md:w-2/3 w-1/2">

          <div className="contact m-4 md:w-1/2 flex flex-col items-center">
            <h4 className="font-bold text-lg text-center">Contact Us</h4>
            <div className="flex flex-col mt-4">
            <a className="flex gap-2">
              <ion-icon name="call"></ion-icon>
              +94 (11) 476 7840
            </a>
            <a
              href="mailto:info@hdlgenhub.com"
              className="flex items-center mt-4 gap-2 hover:text-amber-600 "
            >
              <ion-icon name="mail"></ion-icon>
              info@hdlgenhub.com
            </a>
            </div>
            
          </div>

          <div className="mt-10 m-4 md:mt-5 text-center md:w-1/2">
            <h4 className="font-bold text-lg">Follow Us On</h4>
            <div className="social flex gap-7 mt-4 justify-center">
              <a
                href="https://web.facebook.com"
                className="transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a
                href="https://www.linkedin.com"
                className="transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a
                href="https://www.medium.com"
                className="transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <ion-icon name="logo-medium"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <div className="text-left m-4">
          <p className="font-bold text-xl mb-2 md:text-left text-center">
            <span className="text-orange-500">HDL</span> Gen Hub
          </p>
          <p className="md:text-justify text-center">
            At HDL Gen Hub, we're revolutionizing education with innovation and
            accessibility. Our e-learning platform breaks geographical barriers,
            providing high-quality education for all.
          </p>
        </div>
      </div>
      <div className="bg-amber-600 h-0.5 mx-10"></div>
      <div className="footerlowercontainer">
        <p>
          &copy; Copyright {new Date().getFullYear()} HDL Gen Hub | All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
