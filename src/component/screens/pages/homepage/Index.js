import React, { useState } from "react";
import Styles from "./Index.module.css";
import HomePageHeaderLogo from "../../../assets/images/HomePageHeaderLogo.png";
import UserIcon from "../../../assets/images/UserIcon.png";
import UserIconTwo from "../../../assets/images/UserIconTwo.png";
import ProjectsImage from "../../../assets/images/ProjectsImage.png"
import InvestorsImage from "../../../assets/images/InvestorsImage.png"
import ProjectDocumentsImage from "../../../assets/images/ProjectDocumentsImage.png";
import PartysProjectImage from "../../../assets/images/PartysProjectImage.png";
import CoProducersImage from "../../../assets/images/CoProducersImege.png"
import AdminIcon from "../../../assets/images/AdminIcon.png"
import { Link } from "react-router-dom";

const HomePage = () => {
  const [cart, setCart] = useState([
    {
      img: <img src={ProjectsImage} alt="" />,
      text: <Link className="Link" to="/projects">Projects</Link>,
    },
    {
      img: <img src={InvestorsImage} alt="" />,
      text: <Link className="Link" to="/investor">Investors</Link>,
    },
    {
      img: <img src={CoProducersImage} alt="" />,
      text: <Link className="Link" to="/co_producers">Co-producers</Link>,
    },
    {
      img: <img src={AdminIcon} alt="" />,
      text: <Link className="Link" to="/admin">Admin User</Link>,
    },
    // {
    //   img: <img src={ProjectDocumentsImage} alt="" />,
    //   text: "Project Documents",
    // },
    // {
    //   img: <img src={PartysProjectImage} alt="" />,
    //   text: "Party's project",
    // },
   
  ]);
  return (
    <div className={Styles.HomePageMainContainer}>
      <div className={Styles.HomePageHeaderContainer}>
        <img
          src={HomePageHeaderLogo}
          alt=""
          className={Styles.HomePageHeaderLogoImage}
        />
        <img src={UserIconTwo} alt="" />
      </div>
      <div className={Styles.HomePageCartContainerLayer}>
        <div className={Styles.HomePageCartContainer}>
          {cart.map((data) => (
            <div key={data.id} className={Styles.HomePageCartContent}>
                {data.img}
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
