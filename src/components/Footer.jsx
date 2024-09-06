import React from 'react'

import { ReactComponent as LogoFacebook } from "../assets/images/socials/facebook.svg";
import { ReactComponent as LogoX } from "../assets/images/socials/x.svg";
import { ReactComponent as LogoYoutube } from "../assets/images/socials/youtube.svg";
import { ReactComponent as LogoLinkedin } from "../assets/images/socials/linkedin.svg";


function Footer() {
  return (
    <footer className='h-12 bg-[var(--secondary-color)] flex align-top justify-end pr-2'>
        <div className='flex'>
        <a href="https://www.facebook.com/iimunam" class="transform transition-transform hover:scale-110">
                <LogoFacebook className='h-8 w-8 m-2'/>
            </a>
            <a href="https://www.x.com/iimunam" class="transform transition-transform hover:scale-110">
                <LogoX className='h-8 w-8 m-2 bg-white rounded-full'/>
            </a>
            <a href="https://www.youtube.com/@vinculacioniim" class="transform transition-transform hover:scale-110">
                <LogoYoutube className='h-8 w-8 m-2'/>
            </a>
            <a href="https://www.linkedin.com/company/instituto-de-investigaciones-en-materiales/" class="transform transition-transform hover:scale-110">
                <LogoLinkedin className='h-8 w-8 m-2'/>
            </a>
        </div>
    </footer>
  )
}

export default Footer
