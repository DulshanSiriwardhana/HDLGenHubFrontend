import { useEffect, useState } from "react";
import { SERVER } from "../../env.js";
import "./profilepage.css";
import { getCache, setCache } from "../../caching/cache";
import axios from "axios";
import Dp from "../../components/dp/dp";

const ProfilePage = () => {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [registrationnumber, setRegistrationnumber] = useState();
  const [age, setAge] = useState();
  const [dp, setDp] = useState();
  const [gender, setGender] = useState();
  const [chatid, setChatid] = useState();

  const fetchUser = async () => {
    if (user.role === "student") {
      const res = await axios.get(`${SERVER}/Student/${user.data._id}`);
      setUser(res);
      console.log(res);
      setCache(
        "HDLGenHub_User",
        JSON.stringify({ data: res.data, role: "student" })
      );
      setCache("HDLGenHub_Student", JSON.stringify(res.data));
      setName(res.data.name);
      setEmail(res.data.email);
      setRegistrationnumber(res.data.registrationnumber);
      setAge(res.data.age);
      setDp(res.data.dp);
      setGender(res.data.gender);
      setChatid(res.data.chatid);
      window.location.reload();
    } else if (user.role === "teacher") {
      const res = await axios.get(`${SERVER}/Teacher/${user.data._id}`);
      setUser(res);
      console.log(res);
      setCache(
        "HDLGenHub_User",
        JSON.stringify({ data: res.data, role: "teacher" })
      );
      setCache("HDLGenHub_Teacher", JSON.stringify(res.data));
      setName(res.data.name);
      setEmail(res.data.email);
      setRegistrationnumber(res.data.registrationnumber);
      setAge(res.data.age);
      setDp(res.data.dp);
      setGender(res.data.gender);
      setChatid(res.data.chatid);
      window.location.reload();
    }
    console.log(name, email, registrationnumber, age, dp, chatid);
  };

  useEffect(() => {
    setUser(getCache("HDLGenHub_User"));
    if (user) {
      setName(user.data.name);
      setEmail(user.data.email);
      setRegistrationnumber(user.data.registrationnumber);
      setAge(user.data.age);
      setDp(user.data.dp);
      setGender(user.data.gender);
      setChatid(user.data.chatid);
    }
  }, [ user ]);

  const handleSave = async () => {
    console.log(name, email, registrationnumber, age, dp, gender, chatid);
    try {
      const id = user.data._id;
      console.log(id);
      if (user.role === "student") {
        console.log("Student");
        const res = await axios.put(`${SERVER}/Student/${id}`, {
          name,
          email,
          registrationnumber,
          age,
          dp,
          gender,
          chatid,
        });
        console.log(res);
      } else if (user.role === "teacher") {
        console.log("Teacher");
        const res = await axios.put(`${SERVER}/Teacher/${id}`, {
          name,
          email,
          registrationnumber,
          age,
          dp,
          gender,
          chatid,
        });
        console.log(res);
      }
      fetchUser();
    } catch {
      alert("Profile Saving Error");
    }
  };

  if (user) {
    return (
      <div className="main-display flex felx-col scroll-smooth">
        <div class="bg-white lg:w-2/5 w-full md:w-3/5 flex flex-row justify-center items-center md:rounded-e-full md:rounded rounded-b-full">     
          <div className="dpandname">
            <div className="dpcontainer">
              {user.data.dp ? <Dp Image={user.data.dp} /> : null}
            </div>
            <h1>{user.data.name}</h1>
          </div>

        </div>

        <div className="profilecontainer lg:3/5 md:w-3/5">
          <div className="profileform">
            <div className="email">
              <label>Email</label>
              <input
                value={user.data.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="registrationnumber">
              <label>Registration Number</label>
              <input
                value={user.data.registrationnumber}
                onChange={(e) => setRegistrationnumber(e.target.value)}
              />
            </div>
            <div className="age">
              <label>Age</label>
              <input
                value={user.data.age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="dpurl">
              <label>DP URL</label>
              <input
                placeholder={user.data.dp}
                onChange={(e) => setDp(e.target.value)}
              />
            </div>
            <div className="gender">
              <label>Gender</label>
              <input
                value={user.data.gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="chatid">
              <label>Chat ID</label>
              <input
                value={user.data.chatid}
                onChange={(e) => setChatid(e.target.value)}
              />
            </div>
            <div class="flex justify-center">
            <button class="shadow-lg hover:scale-105" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfilePage;
