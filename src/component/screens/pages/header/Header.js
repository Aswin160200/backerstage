import React, { useState } from "react";
import Styles from "./Index.module.css";

import HeaderImage from "../../../assets/images/HeaderImage.png";
import backarrowOne from "../../../assets/images/backarrowOne.png";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import questionImage from "../../../assets/images/questionImage.png"
import personIcon from "../../../assets/images/personIcon.png"
import { Link } from "react-router-dom";

const HeaderPage = () => {
  return (
    <div className={Styles.HeaderPageMainContainer}>
      <div className={Styles.HeaderPageNavContainer}>
        <div className={Styles.HeaderPageNavContainerLeft}>
          <img src={HeaderImage} alt="logo" className={Styles.HeaderPageLogo} />
          <img src={backarrowOne} alt="logo" />
          <Link className="Link" to="/homepage"><p>Menu</p></Link>
        </div>
        <div className={Styles.HeaderPageNavContainerRight}>
          <div>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search..." }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          </div>
          <img src={questionImage} alt=""/>
          <img src={personIcon} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
