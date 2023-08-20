import { Menu } from "../menu/menu";
import { Currensy } from '../../types/types';

type HeaderPetsProps = {
    сurrensy: Currensy;
    setCurrensy: React.Dispatch<React.SetStateAction<Currensy>>;
};

export function HeaderPets({ сurrensy, setCurrensy }: HeaderPetsProps): JSX.Element {
    return (
        <>
            <header className="header header--category header--product">
                <Menu
                    сurrensy={сurrensy}
                    setCurrensy={setCurrensy}
                />
            </header>

        </>
    );
}