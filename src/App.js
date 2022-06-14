import React, { useEffect } from 'react';
import './App.css';
import { BiHomeAlt } from "react-icons/bi";
import { MdAppRegistration } from 'react-icons/md';
import { AiOutlineInfoCircle, AiOutlineGoogle } from 'react-icons/ai';
import {TbReportMoney} from 'react-icons/tb';
import { CgPaypal } from 'react-icons/cg';
import { IoLogoVenmo } from 'react-icons/io5';
import { SiCashapp } from 'react-icons/si';
function App() {
  const menu = document.getElementById("menu");
  const home = document.getElementById("home");
  const info = document.getElementById("info");
  const donate = document.getElementById("donate");
  const handleClick = () => {
      menu.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  };
  const handleHome = () => {
    info.style.display = "none";
    donate.style.display = "none";

    home.style.height = "100vh";
    home.style.width = "100vw";
    home.style.display = "flex";
    home.style.flexDirection = "column";
    home.style.justifyContent = "center";
    home.style.background = "rgb(4,124,196)";
    home.style.background = "-moz-linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    home.style.background = "-webkit-linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    home.style.background = "linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    home.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#047cc4',endColorstr='#fbf404',GradientType=1);"

    home.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  const handleInfo = () => {
    home.style.display = "none";
    donate.style.display = "none";

    info.style.height = "100vh";
    info.style.width = "100vw";
    info.style.display = "flex";
    info.style.flexDirection = "column";
    info.style.justifyContent = "center";
    info.style.background = "rgb(4,124,196)";
    info.style.background = "-moz-linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    info.style.background = "-webkit-linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    info.style.background = "linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    info.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#047cc4',endColorstr='#fbf404',GradientType=1);"
    
    info.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  const handleDonate = () => {
    home.style.display = "none";
    info.style.display = "none";

    donate.style.height = "100vh";
    donate.style.width = "100vw";
    donate.style.display = "flex";
    donate.style.flexDirection = "column";
    donate.style.justifyContent = "center";
    donate.style.background = "rgb(4,124,196)";
    donate.style.background = "-moz-linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    donate.style.background = "-webkit-linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    donate.style.background = "linear-gradient(90deg, rgba(4,124,196,1) 0%, rgba(251,244,4,1) 100%)";
    donate.style.filter = "progid:DXImageTransform.Microsoft.gradient(startColorstr='#047cc4',endColorstr='#fbf404',GradientType=1);"

    donate.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  const handleRegister = () => {
    window.open("https://forms.gle/Ma9YZb6VctfaAC8SA")
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });
  return (
    <body>
        <div id = "welcome">
          <div id = "btn-container">
            <button id = "btn" onClick = {handleClick}>Run for Ukraine</button>
          </div>
          <div id = "description">
            <i id = "desc-text">click to get started</i>
          </div>
        </div>

        <div id = "menu">
          <div id = "nav-container">
            <dl id = "navbar">
              <dt id = "Home"><button id = "btn" onClick = {handleHome}>Home</button></dt>
              <dd id = "subicon"><BiHomeAlt size = {30}/></dd>
              <dt id = "Info"><button id = "btn" onClick = {handleRegister}>Register</button></dt>
              <dd id = "subicon"><MdAppRegistration size = {30}/></dd>
              <dt id = "Home"><button id = "btn" onClick = {handleInfo}>Info</button></dt>
              <dd id = "subicon"><AiOutlineInfoCircle size = {30}/></dd>
              <dt id = "Info"><button id = "btn" onClick = {handleDonate}>Donate</button></dt>
              <dd id = "subicon"><TbReportMoney size = {30}/></dd>
            </dl>
          </div>
        </div>

        <div id = "home">
          this is home
          <button id = "return" onClick = {handleClick}>back to menu</button>
        </div>

        <div id = "info">
          this is info
          <button id = "return" onClick = {handleClick}>back to menu</button>
        </div>

        <div id = "donate">
          <div id = "options-container">
            <dl id = "options">
                <dt id = "option"><button id = "btn" onClick = {handleHome}>Venmo</button></dt>
                <dd id = "subicon"><IoLogoVenmo size = {30}/></dd>
                <dt id = "option"><button id = "btn" onClick = {handleRegister}>PayPal</button></dt>
                <dd id = "subicon"><CgPaypal size = {30}/></dd>
                <dt id = "option"><button id = "btn" onClick = {handleInfo}>CashApp</button></dt>
                <dd id = "subicon"><SiCashapp size = {30}/></dd>
                <dt id = "option"><button id = "btn" onClick = {handleDonate}>GPay</button></dt>
                <dd id = "subicon"><AiOutlineGoogle size = {30}/></dd>
              </dl>
            </div>
          <button id = "return" onClick = {handleClick}>back to menu</button>

        </div>
    </body>
  );
}

export default App;
