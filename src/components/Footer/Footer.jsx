import React,{useContext} from 'react'
import { SiteContext } from '../../context/SiteContext'
import './footer.css'


function Footer() {
    const {texts} = useContext(SiteContext)
  return (
    <div className='footer--container'>
        <p className="footer--heading">{texts.headings.footerHeading}</p>
        <p className='footer--middle'>{texts.basicInfo.footerMessage}</p>
        <a href="mailto:arda.sem@gmail.com" className="footer--mail">{texts.basicInfo.email}</a>
        <span className="footer--img--container">
            <img src="src\assets\twitter 1.png" alt="" />
            <img src="src\assets\codepen 1.png" alt="" />
            <img src="src\assets\at-sign 1.png" alt="" />
            <img src="src\assets\instagram 1.png" alt="" />
        </span>
    </div>
  )
}

export default Footer