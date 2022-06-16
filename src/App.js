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
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });
  const handleClick = () => {
    const menu = document.getElementById("menu");
    menu.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  };
  const handleHome = () => {
    const home = document.getElementById("home");
    const info = document.getElementById("info");
    const donate = document.getElementById("donate");

    home.style.display = "flex";

    info.style.display = "none";
    donate.style.display = "none";

    home.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  const handleInfo = () => {
    const home = document.getElementById("home");
    const info = document.getElementById("info");
    const donate = document.getElementById("donate");

    info.style.display = "flex";
    
    home.style.display = "none";
    donate.style.display = "none";

    info.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  const handleDonate = () => {
    const home = document.getElementById("home");
    const info = document.getElementById("info");
    const donate = document.getElementById("donate");

    donate.style.display = "flex";
 

    home.style.display = "none";
    info.style.display = "none";

    donate.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  const handleRegister = () => {
    window.open("https://forms.gle/Ma9YZb6VctfaAC8SA")
  };

  const homeMenu = () => {
    const menu = document.getElementById('menu');
    menu.scrollIntoView({ block: 'end',  behavior: 'smooth'});
  };
  const infoMenu = () => {
    const menu = document.getElementById('menu');
    menu.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  };
  const donateMenu = () => {
    const menu = document.getElementById('menu');
    menu.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  };

  return (
    <body>
        <div id = "welcome">
          <div id = "welcome-top">

          </div>

          <div id = "welcome-mid">
            <div id = "btn-container">
              <button id = "btn" onClick = {handleClick}>Run for Ukraine</button>
            </div>
            <div id = "description">
              <i id = "desc-text">click to get started</i>
            </div>
          </div>

          <div id = "bottom">
            <div class = "footer" id = "w-sponsor">
              <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
            </div>
          </div>
        </div>

        <div id = "menu">
          <div id = "menu-top">
            
          </div>

          <div id = "menu-mid">
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

          <div id = "bottom">
            <div class = "footer" id = "m-sponsor">
              <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
            </div>
          </div>

        </div>

        <div id = "home">
          <div id = "home-top">

          </div>

          <div id = "home-mid">
            this is home
            <button id = "return" onClick = {homeMenu}>back to menu</button>
          </div>

          <div id = "home-bottom">
            <div class = "footer" id = "h-sponsor">
                <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
            </div>
          </div>

        </div>

        <div id = "info">
          <div id = "info-top">
            info
          </div>

          <div id = "info-mid">
            <button id = "return" onClick = {infoMenu}>back to menu</button>
          </div>

          <div id = "info-bottom">
            <div class = "footer" id = "i-sponsor">
                <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
            </div>
          </div>

        </div>

        <div id = "donate">
          <div id = "donate-top">
            donate
            <button id = "return" onClick = {donateMenu}>back to menu</button>
          </div>

          <div id = "donate-mid">
            <div id = "options-container">
              <dl id = "options">
                  <dt id = "option"><button id = "btn" onClick = {null}>Venmo</button></dt>
                  <dd id = "subicon"><IoLogoVenmo size = {30}/></dd>
                  <dt id = "option"><button id = "btn" onClick = {null}>PayPal</button></dt>
                  <dd id = "subicon"><CgPaypal size = {30}/></dd>
                  <dt id = "option"><button id = "btn" onClick = {null}>CashApp</button></dt>
                  <dd id = "subicon"><SiCashapp size = {30}/></dd>
                  <dt id = "option"><button id = "btn" onClick = {null}>GPay</button></dt>
                  <dd id = "subicon"><AiOutlineGoogle size = {30}/></dd>
                </dl>
              </div>
          </div>


          <div id = "donate-bottom">
            <div class = "footer" id = "d-sponsor">
                <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
            </div>
          </div>
        </div>
    </body>
  );
}

export default App;
