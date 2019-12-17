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
                    <p>Bountiful Nails offer a variety of services that are accommodating to your wants and needs. We have over 500+ of shellac gel polish, 100+ regular nail polish, 50+ nail tips, 20+ dipping powder, and many more. Our focus is to deliver a finished product matched specific to each guest's own uniqueness.</p>
                </div>
            </main>

        </div>
    )
}

export default About