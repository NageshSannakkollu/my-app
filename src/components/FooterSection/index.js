import { useState } from "react"

import "./index.css"

const FooterSection = () => {
    const [showHideMettaUseInfo,setShowHideMettaInfo] = useState(false)
    const [showHideQuickLinksInfo,setShowHideQuickLinksInfo] = useState(false)
    const [showHideFollowUsInfo,setShowHideFollowUsInfo] = useState(false)
    const showHideFollowUsInfoButton = () =>{
        setShowHideFollowUsInfo(prevState => !prevState)
    }
    const showHideMettaUseInfoButton = () => {
        setShowHideMettaInfo(prevState => !prevState)
    }
    const showHideQuickLinksInfoButton = () => {
        setShowHideQuickLinksInfo(prevState => !prevState)
    }

    const moreInfoMettaUseAltText = showHideMettaUseInfo ? "up arrow":"down-arrow"
    const showHideArrowImage = showHideMettaUseInfo ? "https://res.cloudinary.com/dksgsqhdk/image/upload/v1712650747/arrow-up_edtxel.png":"https://res.cloudinary.com/dksgsqhdk/image/upload/v1713679756/arrow-right_xk1gzo.png"
    
    const moreInfoQuickLinksAltText = showHideQuickLinksInfo ? "up arrow":"down-arrow"
    const showHideArrowImageForQuickLinks = showHideQuickLinksInfo ? "https://res.cloudinary.com/dksgsqhdk/image/upload/v1712650747/arrow-up_edtxel.png":"https://res.cloudinary.com/dksgsqhdk/image/upload/v1713679756/arrow-right_xk1gzo.png"

    const moreInfoFollowUsAltText = showHideFollowUsInfo ? "up arrow":"down-arrow"
    const showHideArrowImageForFollowUs = showHideFollowUsInfo ? "https://res.cloudinary.com/dksgsqhdk/image/upload/v1712650747/arrow-up_edtxel.png":"https://res.cloudinary.com/dksgsqhdk/image/upload/v1713679756/arrow-right_xk1gzo.png"
    return(
        <div className="footer-container">
        <div className="footer-email-contact-us-container">
        <div>
            <h2>BE THE FIRST TO KNOW?</h2>
            <p className="footer-small-extra-small-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <p className="footer-medium-text">Sign up for updates from mettā muse.</p>
            <div className="input-mail-subscribe-container">
            <input type="text" placeholder="Enter your e-mail... " className="input-mail"/>
            <button type="button" className="footer-subscribe-button">SUBSCRIBE</button>
            </div>
            
        </div>
        <div className="contact-us-container">
        
        <h3>CONTACT US</h3>
        <div className="call-us-container">
        <p>+44 221 133 5360</p>
        <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712682576/Star_1_bi89fm.png" alt="star" className="call-us-star star-image"/>
        <p>customercare@mettause.com</p>
        </div>
        <h2>Currency</h2>
        <div className="contact-us-currency-container">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1713683846/United_States_of_America_US_ab2sef.png" alt="united states" className="united-states-logo" />
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712682576/Star_1_bi89fm.png" alt="star" className="star-image"/>
            <p>USD</p>
        </div>
        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
        </div>
        <hr/>
        <div className="footer-bottom-container">
            <div className="metta-use-medium-container">
                <h2>mettā muse</h2>
                <ul className="list-items onClick">
                    <li>About us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact us</li>
                    <li>EU Compliances Docs</li>
                </ul>
                </div>
                <div className="metta-use-container">
                <div className="metta-use-title-arrow-container">
                <h3>mettā muse</h3>
                <img src={showHideArrowImage} alt={moreInfoMettaUseAltText} className="show-hide-arrow-image" onClick={showHideMettaUseInfoButton}/>
                </div>
            {showHideMettaUseInfo &&      
            <ul className="list-items onClick">
                    <li>About us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact us</li>
                    <li>EU Compliances Docs</li>
                </ul>}
                </div>
                <div className="metta-use-medium-container">
                <h3>QUICK LINKS</h3>
                <ul className="list-items onClick">
                    <li>Orders & Shipping </li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
              <div className="metta-use-container">
                <div className="metta-use-title-arrow-container">
                <h3>QUICK LINKS</h3>
                <img src={showHideArrowImageForQuickLinks} alt={moreInfoQuickLinksAltText} className="show-hide-arrow-image" onClick={showHideQuickLinksInfoButton}/>
                </div>
            {showHideQuickLinksInfo &&      
            <ul className="list-items onClick">
                    <li>Orders & Shipping </li>
                    <li>Join/Login as a Seller</li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                 }
                </div>
            <div>
            <div className="metta-use-medium-container">
                <h3>FOLLOW US</h3>
                <button type="button" className="social-media-logo-buttons">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712738835/Vector_sdm7zk.png" alt="instagram logo" className="follow-us-section-logos" />
                </button>
                <button type="button" className="social-media-logo-buttons">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712685177/mdi_linkedin_ew4p0z.png" alt="linkedin logo" className="follow-us-section-logos" />
                </button>
                </div>
            <div className="metta-use-container">
                <div className="metta-use-title-arrow-container">
                <h3>FOLLOW US</h3>
                <img src={showHideArrowImageForFollowUs} alt={moreInfoFollowUsAltText} className="show-hide-arrow-image" onClick={showHideFollowUsInfoButton}/>
                </div>
            {showHideFollowUsInfo && 
                <div>
                <button type="button" className="social-media-logo-buttons">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712738835/Vector_sdm7zk.png" alt="instagram logo" className="follow-us-section-logos" />
                </button>
                <button type="button" className="social-media-logo-buttons">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712685177/mdi_linkedin_ew4p0z.png" alt="linkedin logo" className="follow-us-section-logos" />
                </button>   
                </div>
                }
                </div>
            <div className="metta-use-accepts-cards-container">
            <h4>mettā muse Accepts</h4>
            <div className="cards-container">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712686790/Group_136187_lqwk81.png" alt="Bank cards" className="gpay-card small-size-accept-cards" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712686790/Group_136189_h9boda.jpg" alt="Bank cards" className="gpay-card small-size-accept-cards" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712686790/Group_136191_ifiw92.jpg" alt="Bank cards" className="gpay-card small-size-accept-cards" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712686790/Vector_iaifya.png" alt="Bank cards" className="amex-card small-size-accept-cards" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712687035/Group_tnqwjl.png" alt="Bank cards" className="apple-pay-card small-size-accept-cards" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712686836/Vector_wq7mce.png" alt="Bank cards" className="pay-card small-size-accept-cards" />
            </div>
            </div>
            </div>
        </div>
        <p className="copy-rights-info">Copyright © 2023 mettamuse. All rights reserved.</p>
    </div>

    )
}
    
export default FooterSection