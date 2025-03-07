import React, { useState } from "react";
import Styles from "./Index.module.css";
import LoginImageTwo from "../../../assets/images/LoginImageTwo.jpg";
import HeaderImage from "../../../assets/images/HeaderImage.png";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Checkbox, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useHistory, useNavigate } from "react-router-dom";

export const InputStyled = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 50px;
    border-color: #fff;
    color: #fff;
    height: 46px;
    font-size: 14px;

    & fieldset {
      border-color: #fff;
    }

    &:hover fieldset {
      border-color: #fff;
    }

    &.Mui-focused fieldset {
      border-color: #fff;
      border:1px solid #fff;
    }

    &.Mui-active fieldset {
      border-color: #fff;
    }
  }
`;

export const InputStyledPassword = styled(OutlinedInput)`
  border-radius: 50px;
  color: #fff;
  background-color: transparent;
  height: 46px;
  font-size: 14px;

  & fieldset {
    border-color: #fff;
    border-radius: 50px;
  }

  &:hover fieldset {
    border-color: #fff !important;
  }

  &.Mui-focused fieldset,
  &.Mui-active fieldset {
    border-color: #fff !important;
    border-width: 2px;
  }

  input {
    color: #fff;
  }
.MuiIconButton-root {
    color: #fff;
  }
  
  &:focus-within .MuiIconButton-root {
    color: #fff;
  }
     &:hover-within .MuiIconButton-root {
    color: #fff;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
   
    const initialErrorMessage = { username: "",  password: "" };

  const [error, setError] = useState(initialErrorMessage);

    const [login, setLogin]=useState(
        {
            username:"",
            password:"",
        }
    )

    console.log(login)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    const handleLoginUser=()=>{
        let a = { username: "", password: "" };
        setError(a);
        if (login.username === "") {
            a.username = "*Please enter the username";
          }
        if(login.username !== "user"){
            a.username = "*Invalid username.";
        }
        if (login.password === "") {
            a.password = "*Please enter the password";
          }
        if(login.password !== "User@123"){
            a.password = "*Invalid password.";
        }
        else{
            navigate('/homePage')
            setError(a);
        }
    }

  return (
    <div className={Styles.LoginPageMainContainer}>
      <div className={Styles.LoginPageMainCart}>
        <div className={Styles.LoginContentCart}>
          <div className={Styles.LoginContentCartTitleContainer}>
            <p className={Styles.LoginContentCartTitleContainerText}>
              Welcome Back to
            </p>
            <p className={Styles.LoginContentCartTitleContainerText}>
              Producer Login!
            </p>
          </div>
          <div className={Styles.LoginPageInputContainer}>
            <p className={Styles.LoginPageInputContainerText}>Username</p>

            <InputStyled
              id="outlined-basic"
              // className={Styles.LoginPageInputContainerInput}
              inputProps={{ maxLength: 20 }}
              name="username"
              onChange={(e)=>setLogin({...login,username:e.target.value})}
            />
             {error?.username && (
                        <span className={Styles.registerErrormsg}>
                          {error?.username}
                        </span>
                      )}
          </div>
          <div className={Styles.LoginPageInputContainer}>
            <p className={Styles.LoginPageInputContainerText}>password</p>

            <InputStyledPassword
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            inputProps={{ maxLength: 15 }}
            name="password"
            onChange={(e)=>setLogin({...login,password:e.target.value})}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
           {error?.password && (
                        <span className={Styles.registerErrormsg}>
                          {error?.password}
                        </span>
                      )}
          </div>
            <div className={Styles.LoginPageCartPasswordRememberContainer}>
                    <div className={Styles.LoginPageCartPasswordRememberContent}>
                    <Checkbox className={Styles.LoginPageCartPasswordRememberContentIcon}/>
                    <p className={Styles.LoginPageInputContainerText}>Remember me</p>
                    </div>
                    <p className={Styles.LoginPageInputContainerText}>Forgot Password ?</p>
            </div>
            <button className={Styles.LoginButton} onClick={()=> handleLoginUser()}>Login</button>
        </div>
        <div className={Styles.LoginContentCartTwo}>
          <img
            src={HeaderImage}
            alt=""
            className={Styles.LoginContentCartTitleImg}
          />
          <img
            src={LoginImageTwo}
            alt=""
            className={Styles.LoginContentCartImg}
          />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
