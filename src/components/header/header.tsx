import { Menu } from "../menu/menu";
import { HeaderIntro } from "../header-intro/header-intro";

export function Header() {
    return (
        <>
            <header className="header">
                <Menu />
                <HeaderIntro />
            </header>

        </>
    );
}