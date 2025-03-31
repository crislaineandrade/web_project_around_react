import logo from '../../images/logo_header.png'
function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={logo}alt="logo"/>
            <div className="header__line"></div>
        </header>

    )
}

export default Header