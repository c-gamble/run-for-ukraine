import React, { useEffect } from 'react';
import './App.css';

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//icons
import { BiHomeAlt } from "react-icons/bi";
import { MdAppRegistration } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {TbReportMoney} from 'react-icons/tb';
import { CgPaypal } from 'react-icons/cg';
import { IoLogoVenmo } from 'react-icons/io5';
import { SiCashapp } from 'react-icons/si';

//components
import UkraineSelector from './selectors/ukraine.selector';
import EventSelector from './selectors/event.selector';


function App() {

  const slideImages = [
    {
      url: require('./images/1.png'),
      caption: 'Ukrainian soldiers carry the coffins of the fallen during the funeral in Lviv, Ukraine on May 26.',
    },
    {
      url: require('./images/2.png'),
      caption: "Russia's stated aim is to capture and control Ukraine's eastern region of Donbas.",
    },
    {
      url: require('./images/3.png'),
      caption: 'Participants train with wooden replicas of weapons during a defense course for civilians.',
    },
    {
      url: require('./images/4.png'),
      caption: "The Remembrance Wall at St. Michael's Cathedral memorializes 14,000+ soldiers killed in Ukraine.",
    },
    {
      url: require('./images/5.png'),
      caption: 'Rescuers work at a residential building damaged during Ukraine-Russia conflict in Mariupol.',
    }
]

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
    window.open("https://form.jotform.com/222060604863147")
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

        {/*welcome */}
        <div id = "welcome">
          <div id = "welcome-top">
            <div id = "t1">

            </div>

            <div id = "t2">

            </div>

            <div id = "t3">

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

        {/*menu */}
        <div id = "menu">
          <div id = "menu-top">
            <div id = "t1">

            </div>

            <div id = "t2">

            </div>

            <div id = "t3">

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

      {/*home */}
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

            </div>


          </div>

          <div id = "home-mid">
            <div id = "home-mid-1">
                <div id = "home-event-details">
                  <h4>Quick Facts</h4> 
                  <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul> 
                </div>
            </div>
            <div id = "home-mid-2">
              <div id = 'home-imgs'>
                <Fade>
                  <div id = 'slide'>
                    <img alt = {slideImages[0].caption} src = {slideImages[0].url} />
                    <span id = 'caption' style = {{'color': 'rgb(255, 255, 255)', 'backgroundColor':'rgba(0, 0, 0, 0.5)'}}>{slideImages[0].caption}</span>
                  </div>
                  <div id = 'slide'>
                    <img alt = {slideImages[1].caption} src = {slideImages[1].url} />
                    <span id = 'caption' style = {{'color': 'rgb(255, 255, 255)', 'backgroundColor':'rgba(0, 0, 0, 0.5)'}}>{slideImages[1].caption}</span>
                  </div>
                  <div id = 'slide'>
                    <img alt = {slideImages[2].caption} src = {slideImages[2].url} />
                    <span id = 'caption' style = {{'color': 'rgb(255, 255, 255)', 'backgroundColor':'rgba(0, 0, 0, 0.5)'}}>{slideImages[2].caption}</span>
                  </div>
                  <div id = 'slide'>
                    <img alt = {slideImages[3].caption} src = {slideImages[3].url} />
                    <span id = 'caption' style = {{'color': 'rgb(255, 255, 255)', 'backgroundColor':'rgba(0, 0, 0, 0.5)'}}>{slideImages[3].caption}</span>
                  </div>
                  <div id = 'slide'>
                    <img alt = {slideImages[4].caption} src = {slideImages[4].url} />
                    <span id = 'caption' style = {{'color': 'rgb(255,255,255)', 'backgroundColor':'rgba(0, 0, 0, 0.5)'}}>{slideImages[4].caption}</span>
                  </div>
                </Fade>
              </div>
            </div>
            <div id = "home-mid-3">
                <div id = "home-cause-blurb">
                  <h4>Our Mission</h4>
                  <p>The organizers' foremost objective is to unite our community in making a meaningful difference globally. The country of Ukraine’s sovereignty and citizens are threatened by the Russian invasion. By joining our cause, you are providing essential aid to people in critical need.</p>
                </div>

            </div>

          </div>

          <div id = "home-bottom">
            <div id = "home-b-cont">
              <button id = "home-btn" onClick = {() => window.open('https://form.jotform.com/222060604863147')}>Register Now</button>
              <h4>or</h4>
              <button id = "home-btn" onClick = {() => window.open('')}>Read More</button>
             </div>
          </div>

        </div>

      {/*info */}
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

            </div>
          </div>

          <div id = "info-content">
            <div id = "info-main">
                <UkraineSelector />
                <EventSelector />
            </div>
          </div>
        </div>

      {/*donate */}
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

            </div>


          </div>

          <div id = "donate-mid">
            <div id = "options-container">
              <dl id = "donate-options">
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
                <h4 id = "thank">We sincerely appreciate your contribution. All proceeds will be donated to the <b>International Committee of the Red Cross</b> to aid humanitarian efforts in Ukraine.</h4>
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
