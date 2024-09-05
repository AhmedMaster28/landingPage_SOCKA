import Logo from "../assets/logo23.png";
import Email from "./Email";
import { FaInstagram } from "react-icons/fa";
const Logotext = () => {
  return (
    <>
      <div className="container">
        <img src={Logo} className="img" alt="Logo Image" />
        <br />
        <br />
        <div className="py-3">

        <h1 className="epilogue-uniquifier text-white text-center fonts">WE ARE A</h1>
        <h1 className="epilogue-uniquifier text-white text-center fonts">MOVEMENT FOR CHANGE</h1>

        <p className="epilogue-uniquifier text-white text-center fw-2 paraSub">Subscribe to become a SOCKA partnered club</p>
        <Email/>
        
        <div className="instaClubText d-flex justify-content-center flex-column align-items-center">
          <FaInstagram  className="icon"/>
          <p className="my-5 epilogue-uniquifier copyright">&copy; 2024, Socka Club</p>


        </div>

        </div>
      </div>
    </>
  );
};

export default Logotext;
