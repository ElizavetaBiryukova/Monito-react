import { Menu } from "../menu/menu";
import { HeaderIntro } from "../header-intro/header-intro";
import { Currensy } from '../../types/types';

type HeaderProps = {
    сurrensy: Currensy;
    setCurrensy: React.Dispatch<React.SetStateAction<Currensy>>;
}

export function Header({ сurrensy, setCurrensy }: HeaderProps): JSX.Element {
    return (
        <>
            <header className="header">
                <Menu
                    сurrensy={сurrensy}
                    setCurrensy={setCurrensy}
                />
                <HeaderIntro />
            </header>

        </>
    );
}