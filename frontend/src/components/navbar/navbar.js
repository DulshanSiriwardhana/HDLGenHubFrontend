import { useEffect, useState } from "react";
import "./navbar.css";
import { deleteCache, getCache, setCache } from "../../caching/cache";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCache("HDLGenHub_User"));
    if (user) {
      if (user.role === "student") {
        setStudent(getCache("HDLGenHub_Student"));
      } else if (user.role === "teacher") {
        setTeacher(getCache("HDLGenHub_Teacher"));
      } else {
        alert("Missing role");
      }
    }
    setLogged(getCache("HDLGenHub_loggedState"));
  }, [logged]);

  const handleLogout = () => {
    alert("User logged out");
    setLogged(0);
    deleteCache("HDLGenHub_loggedState");
    setUser(null);
    deleteCache("HDLGenHub_User");
    setStudent(null);
    deleteCache("HDLGenHub_Student");
    setTeacher(null);
    deleteCache("HDLGenHub_Teacher");
    navigate("/");
    window.location.reload();
  };

  console.log("Logged user: ", user);
  if (user) {
    if (teacher) {
      return (
        <div className="navbarcontainer">
          <div className="navbarleftcontainer">
            <ul>
              <li className="navbarhometext">
                <a href="/">
                  <span style={{ color: "#fa9746" }}>HDL</span> Gen Hub
                </a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                {/*<a href="/competitions">Competitions</a>*/}
              </li>
              <li>
                <a href="/creation">Creation</a>
              </li>
            </ul>
          </div>
          <div className="navbarrightcontainer">
            <ul>
            <li className="h-6 w-6 md:h-9 md:w-9 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center">
                <a href="/profile"><span  class="material-symbols-outlined">person</span></a>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,100,1,0" rel="stylesheet" />
              </li>
              <li className="w-12 h-6 md:w-20 md:h-9 text-white bg-gray-400 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      );
    } else if (student) {
      return (
        <div className="navbarcontainer">
          <div className="navbarleftcontainer">
            <ul>
              <li className="navbarhometext">
                <a href="/">
                  <span style={{ color: "#fa9746" }}>HDL</span> Gen Hub
                </a>
              </li>
              <li>
                <a href="/learn">Learn</a>
              </li>
              <li>
                <a href="/competitions">Competitons</a>
              </li>
              <li>
                <a href="/challenges">Challenges</a>
              </li>
            </ul>
          </div>
          <div className="navbarrightcontainer">
            <ul>
              <li className="h-7 w-7 md:h-9 md:w-9 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center">
                <a href="/profile"><span  class="material-symbols-outlined">person</span></a>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,100,1,0" rel="stylesheet" />
              </li>
              <li className="w-16 h-7 md:w-20 md:h-9 text-white bg-gray-400 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbarcontainer">
          <div className="navbarleftcontainer">
            <ul>
              <li className="navbarhometext">
                <a href="/">
                  <span style={{ color: "#fa9746" }}>HDL</span> Gen Hub
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/help">Help</a>
              </li>
            </ul>
          </div>
          <div className="navbarrightcontainer">
            <ul>
              <li className="w-16 h-7 md:w-20 md:h-9 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
                <a href="/signinpage">Sign In</a>
              </li>
              <li className="w-16 h-7 md:w-20 md:h-9 text-white bg-gray-400 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
                <a href="/signuppage">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="navbarcontainer">
        <div className="navbarleftcontainer">
          <ul>
            <li className="navbarhometext">
              <a href="/">
                <span style={{ color: "#fa9746" }}>HDL</span> Gen Hub
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
          </ul>
        </div>
        <div className="navbarrightcontainer">
          <ul>
            <li className="w-16 h-7 md:w-20 md:h-9 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
              <a href="/signinpage">Sign In</a>
            </li>
            <li className="w-16 h-7 md:w-20 md:h-9 text-white bg-gray-400 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
              <a href="/signuppage">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Navbar;