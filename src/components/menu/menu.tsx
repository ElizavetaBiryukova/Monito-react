import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg';
import { ReactComponent as Glass } from '../../assets/images/icons/glass.svg';
import Vnd from '../../assets/images/currency/vnd.svg';
import { Link } from 'react-router-dom';
import { CurrencList } from '../currenc-list/currenc-list';
import { Currensy } from '../../types/types';


export function Menu(): JSX.Element {

    const [openCurrensy, setOpenCurrensy] = useState(false);
    const [сurrensy, setCurrensy] = useState<Currensy>({
        image: Vnd,
        name: 'VND',
    });

    const handleChange = (obj: Currensy) => {
        setCurrensy(obj)
        setOpenCurrensy(false)
    }

    return (
        <>
            <div className="header__menu menu">
                <div className="menu__logo logo">
                    <Link to={'/'} className="logo__link">
                        <div className="logo__wrapper">
                            <Logo />
                            <span className="logo__caption">Pets for Best</span>
                        </div>
                    </Link>
                </div>
                <div className="menu__burger burger">
                    <div className="burger__item" />
                    <div className="burger__item" />
                    <div className="burger__item" />
                </div>
                <nav className="menu__nav nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to={'/'} className="nav__link">
                                Home
                            </Link>
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
                <div className="menu__currency currency" onClick={() => setOpenCurrensy((prev) => !prev)}>
                    <img
                        src={сurrensy.image}
                        alt="currency"
                        className="currency__logo"
                    />
                    <div className="currency__name">{сurrensy.name}</div>
                    {/* <div className="currency__pointer">˅</div> */}
                </div>
                {openCurrensy && <CurrencList
                    onClick={handleChange}
                />}
            </div>
        </>
    );
}