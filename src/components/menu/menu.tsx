import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import { ReactComponent as Glass } from '../../assets/images/icons/glass.svg';
import Vnd from '../../assets/images/currency/vnd.svg';

export function Menu() {
    return (
        <>
                <div className="header__menu menu">
                    <div className="menu__logo logo">
                        <a href="./index.html" className="logo__link">
                            <div className="logo__wrapper">
                                <Logo />
                                <span className="logo__caption">Pets for Best</span>
                            </div>
                        </a>
                    </div>
                    <div className="menu__burger burger">
                        <div className="burger__item" />
                        <div className="burger__item" />
                        <div className="burger__item" />
                    </div>
                    <nav className="menu__nav nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="./index.html" className="nav__link">
                                    Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="./category.html" className="nav__link">
                                    Category
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#" className="nav__link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="menu__search search">
                        <div className="search__logo">
                        <Glass />
                        </div>
                        <input
                            className="search__input"
                            type="search"
                            defaultValue="Search something here!"
                        />
                    </div>
                    <div className="menu__join-community">
                        <a href="!#" className="menu__link">
                            Join the community
                        </a>
                    </div>
                    <div className="menu__currency currency">
                        <img
                            src={Vnd}
                            alt="currency"
                            className="currency__logo"
                        />
                        <div className="currency__name">VND</div>
                        <div className="currency__pointer">˅</div>
                    </div>
                </div>
        </>
    );
}