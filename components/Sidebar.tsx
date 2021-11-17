import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineAudit,
} from "react-icons/ai";
import { RiUserLocationLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div>
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/167369370_795413408073968_2869847048517859270_n.jpg?_nc_cat=111&cb=c578a115-c1c39920&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cN9Q6td-Qb4AX_Z1G7K&_nc_ht=scontent.ftlv6-1.fna&oh=f9a18c5b35060ffafcf3e70ba830bdac&oe=61BAAD44"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Baranova </span>
        Ksenia
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web-developer</p>
      <a
        href=""
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        download="name"
      >
        <AiOutlineAudit className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around mx-auto w-9/12 my-5 text-green md:w-full">
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* adress */}
      <div
        className="py-4 my-5 bg-gray-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <RiUserLocationLine className="w-6 h-6" />
          <span>Haifa, Israel</span>
        </div>
        <p className="my-2">baranovaksenia1990@gmail.com</p>
        <p className="my-2">+972 053 330 9388</p>
      </div>
      {/* Email Button */}
      <button
        className="bg-gradient-to-t from-green to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white focus:outline-none"
        onClick={() => window.open("mailto:baranovaksenia1990@gmail.com")}
      >
        Email Me
      </button>
      <button className="bg-gradient-to-t from-green to-blue-400 w-8/12 rounded-full py-2 px-5 my-2 text-white">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
