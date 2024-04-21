
import "./index.css"

const Header = () => {
 
    const clickOnLogout = () => {
        console.log("Click On Logout")
    }
    return(
    <div className="header-container">
        <div className="logo-title-header-container">
        <div className="logo-menu-bar-container">
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1705903264/menu-bar_x7yq9j.png" alt="menu" className="menu-image" />
            <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712484849/Logo_yu16oc.png" alt="logo" className="logo" />

        </div> 
            <h1 className="title">App Scrip</h1>
            <div className="images-container">
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712486635/search-normal_j3hpgk.png" alt="search icon" className="header-right-container-image" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712485195/heart_fcro5g.png" alt="heart icon" className="header-right-container-image" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712485541/shopping-bag_g4woo4.png" alt="shopping iocn" className="header-right-container-image" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712485559/profile_eakmb7.png" alt="profile icon" className="header-right-container-image profile" />
                <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712485589/Language_zl2rrl.png" alt="language icon" className="header-right-container-image language"/>
                <button type="button" className="logout-button" onClick={clickOnLogout}>Logout</button>
                <button type="button" className="logout-image-button" onClick={clickOnLogout}>
                    <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1713706754/logout-512_ne4u8z.png" alt="logout" className="logout-image" />
                </button>
            </div>
            </div>
            <div className="list-of-menu-small-screens">
                <p>HOME</p>
                <hr className="horizontal-line"/>
                <p>SHOP</p>
            </div>
            <ul className="list-of-menu">
                <li className="list-item">SHOP</li>
                <li className="list-item">SKILLS</li>
                <li className="list-item">STORIES</li>
                <li className="list-item">ABOUT</li>
                <li className="list-item">CONTACT US</li>
            </ul>
      
    </div>

)}
export default Header 