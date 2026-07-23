import "./Footer.css";

import logo from "../../../resources/images/ima1logo.png";

import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";


function Footer() {


return (

<footer className="footer">


<div className="footer__container">



{/* BRAND */}


<div className="footer__brand">


<div className="footer__logo">

<img
src={logo}
alt="VB Secure Solutions"
/>

</div>



<p className="footer__brand-name">

VB Secure Solutions

</p>



<p className="footer__text">

Digital solutions engineered for modern businesses.
We create secure, scalable and high-performance
websites with a focus on design, reliability and user
experience.

</p>


</div>






{/* CONTACT */}



<div className="footer__contact">


<h4>
Contact
</h4>



<a
  href="mailto:vbsecuresolutions@gmail.com?subject=Website%20Enquiry&body=Hello%20VB%20Secure%20Solutions,%0A%0AI%20would%20like%20to%20discuss%20a%20new%20project."
  aria-label="Email VB Secure Solutions"
>
  <FaEnvelope />

  <span>vbsecuresolutions@gmail.com</span>
</a>



<a href="tel:+447308405339">

<FaPhoneAlt/>

+44 73 0840 5339

</a>




<div className="footer__address">

<FaMapMarkerAlt/>

Cardiff, United Kingdom

</div>



</div>









{/* COMPANY */}



<div className="footer__column">


<h4>
Company
</h4>


<Link to="/About">
About Us
</Link>


<Link to="/ourPortfolio">
Portfolio
</Link>


<Link to="/ContactUs">
Contact
</Link>



</div>







{/* SERVICES */}












{/* LEGAL */}












{/* CONNECT */}



<div className="footer__column footer__social">


<h4>
Connect
</h4>



<a href="https://www.instagram.com/vbsecuresoftware/">

<FaInstagram/>

<span>

Instagram

</span>

</a>




<a href="https://www.facebook.com/profile.php?id=61592254801987">

<FaFacebookF/>

<span>

Facebook

</span>

</a>




<a href="https://wa.me/447308405339"
  target="_blank"
  rel="noopener noreferrer">

<FaWhatsapp/>

<span>

WhatsApp

</span>

</a>




<a href="https://t.me/Leonid_V_B"
  target="_blank"
  rel="noopener noreferrer">

<FaTelegramPlane/>

<span>

Telegram

</span>

</a>



</div>






</div>







<div className="footer__bottom">


<p>

© 2026 VB Secure Solutions. All rights reserved.

</p>



<div>


<Link to="/PrivacyPolicy">
Privacy Policy
</Link>


<Link to="/terms-of-service">
Terms of Service
</Link>


<Link to="/CookiePolicy">
Cookie Policy
</Link>


<Link to="/Accessibility">
Accessibility
</Link>



</div>



</div>





</footer>

);


}


export default Footer;