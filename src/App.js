import React, { useEffect } from 'react';
import './App.css';
import { BiHomeAlt } from "react-icons/bi";
import { MdAppRegistration } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';
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
            <div id = "t1">

            </div>

            <div id = "t2">

            </div>

            <div id = "t3">
              <div class = "corner" id = "w-sponsor">
                <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
              </div>
            </div>
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

          </div>
        </div>

        <div id = "menu">
          <div id = "menu-top">
            <div id = "t1">

            </div>

            <div id = "t2">

            </div>

            <div id = "t3">
              <div class = "corner" id = "m-sponsor">
                <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
              </div>
            </div>
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

          </div>

        </div>

        <div id = "home">

          <div id = "home-top">
            <div id = "t1">

            </div>

            <div id = "t2">
              <div id = "content-container">
                <div id = "content">
                  <button id = "btn" onClick = {homeMenu}>Run for Ukraine</button>
                  <div id = "title">Home</div>
                </div>
              </div>
            </div>

            <div id = "t3">
              <div class = "corner" id = "h-sponsor">
                  <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
              </div>
            </div>


          </div>

          <div id = "home-mid">

          </div>

          <div id = "home-bottom">

          </div>

        </div>

        <div id = "info">

          <div id = "info-top">
            <div id = "t1">

            </div>

            <div id = "t2">
              <div id = "content-container">
                <div id = "content">
                  <button id = "btn" onClick = {infoMenu}>Run for Ukraine</button>
                  <div id = "title">Info</div>
                </div>
              </div>
            </div>

            <div id = "t3">
              <div class = "corner" id = "i-sponsor">
                  <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
              </div>
            </div>
          </div>

          <div id = "info-mid">
            <div id = "div-title">
              About the Cause
            </div>
            <div id = "mts">
              <div id = "mt1">
                <dl id = "list">
                  <dt id = "item">What is happening in Ukraine?</dt>
                  <dd id = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis malesuada ex ut ultricies. Ut ac faucibus erat. Duis mattis nulla quis dolor efficitur pharetra. Suspendisse suscipit dapibus magna non fermentum. Sed scelerisque ex vel ex rhoncus mollis. Aenean semper nunc gravida est sodales condimentum. Sed hendrerit, velit ut commodo fermentum, lacus arcu placerat diam, id volutpat leo turpis at dolor.</dd>
                </dl>
              </div>
              
              <div id = "mt2">
                <dl id = "list">
                  <dt id = "item">What are the global consequences?</dt>
                  <dd id = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis malesuada ex ut ultricies. Ut ac faucibus erat. Duis mattis nulla quis dolor efficitur pharetra. Suspendisse suscipit dapibus magna non fermentum. Sed scelerisque ex vel ex rhoncus mollis. Aenean semper nunc gravida est sodales condimentum. Sed hendrerit, velit ut commodo fermentum, lacus arcu placerat diam, id volutpat leo turpis at dolor.</dd>
                </dl>
              </div>

              <div id = "mt3">
                <dl id = "list">
                  <dt id = "item">How can we support Ukraine?</dt>
                  <dd id = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis malesuada ex ut ultricies. Ut ac faucibus erat. Duis mattis nulla quis dolor efficitur pharetra. Suspendisse suscipit dapibus magna non fermentum. Sed scelerisque ex vel ex rhoncus mollis. Aenean semper nunc gravida est sodales condimentum. Sed hendrerit, velit ut commodo fermentum, lacus arcu placerat diam, id volutpat leo turpis at dolor.</dd>
                </dl>
              </div>
            </div>
          </div>

          <div id = "info-bottom">
            <div id = "div-title">
              About the Event
            </div>
            <div id = "bts">
              <div id = "bt1">
                <dl id = "list">
                  <dt id = "item">When and where is Run for Ukraine?</dt>
                  <dd id = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis malesuada ex ut ultricies. Ut ac faucibus erat. Duis mattis nulla quis dolor efficitur pharetra. Suspendisse suscipit dapibus magna non fermentum. Sed scelerisque ex vel ex rhoncus mollis. Aenean semper nunc gravida est sodales condimentum. Sed hendrerit, velit ut commodo fermentum, lacus arcu placerat diam, id volutpat leo turpis at dolor.</dd>
                </dl>
              </div>
              
              <div id = "bt2">
                <dl id = "list">
                  <dt id = "item">What is the procedure to register?</dt>
                  <dd id = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis malesuada ex ut ultricies. Ut ac faucibus erat. Duis mattis nulla quis dolor efficitur pharetra. Suspendisse suscipit dapibus magna non fermentum. Sed scelerisque ex vel ex rhoncus mollis. Aenean semper nunc gravida est sodales condimentum. Sed hendrerit, velit ut commodo fermentum, lacus arcu placerat diam, id volutpat leo turpis at dolor.</dd>
                </dl>
              </div>

              <div id = "bt3">
                <dl id = "list">
                  <dt id = "item">What can I expect at the event?</dt>
                  <dd id = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis malesuada ex ut ultricies. Ut ac faucibus erat. Duis mattis nulla quis dolor efficitur pharetra. Suspendisse suscipit dapibus magna non fermentum. Sed scelerisque ex vel ex rhoncus mollis. Aenean semper nunc gravida est sodales condimentum. Sed hendrerit, velit ut commodo fermentum, lacus arcu placerat diam, id volutpat leo turpis at dolor.</dd>
                </dl>
              </div>
            </div>
          </div>

        </div>

        <div id = "donate">

          <div id = "donate-top">
            <div id = "t1">

            </div>

            <div id = "t2">
              <div id = "content-container">
                <div id = "content">
                  <button id = "btn" onClick = {donateMenu}>Run for Ukraine</button>
                  <div id = "title">Donate</div>
                </div>
              </div>
            </div>

            <div id = "t3">
              <div class = "corner" id = "d-sponsor">
                  <a id = "sponsor" href = "https://www.rochinitiative.org" target = "_blank" rel = "noreferrer">Sponsored By <b>RCI</b></a>
              </div>
            </div>


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
                </dl>
              </div>
            <div id = "donate-mid-bottom">
              <div id = "thank-container">
                <h4 id = "thank">We sincerely appreciate your contribution. All proceeds will be donated to the International Committee of the Red Cross to aid humanitarian efforts in Ukraine.</h4>
              </div>
            </div>

          </div>


          <div id = "donate-bottom">

          </div>
        </div>
    </body>
  );
}

export default App;
