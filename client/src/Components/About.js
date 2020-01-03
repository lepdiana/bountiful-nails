import React from 'react'

import '../Styles/about.css'

const About = () => {

    function scrollBanner() {
        var scrollPos;
        var headerText = document.querySelector('.header-paralax h1');
        scrollPos = window.scrollY;
      
        if (scrollPos <= 600) {
          headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
          headerText.style.opacity = 1 - (scrollPos / 600);
        }
      }
      window.addEventListener('scroll', scrollBanner);

      
    return(
        <div>
            <div className="invisibileBox"></div>
            <header className='header-paralax'>
                <h1>Our Vision</h1>
            </header>
            <main>
                <div className='aboutContainer'>
                    <p>Bountiful Nails offer a variety of services that are accommodating to your wants and needs. We have over 500+ of shellac gel polish, 100+ regular nail polish, 50+ nail tips, 20+ dipping powder, and many more. Each product is delivered in the highest quality possible. Our primary focus is to deliver a finished product matched specific to each guest's own uniqueness. You can stop by to see all of our selections or you can give us a call for any details! </p>
                    <img src='https://i.postimg.cc/ryJP2xhd/Momma-Ho-s-14.jpg' alt='shellac gel polish' className='aboutImage'/>
                </div>
            </main>

        </div>
    )
}

export default About