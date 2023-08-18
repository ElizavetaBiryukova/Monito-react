import vnd from '/src/assets/images/currency/vnd.svg'
import ru from '/src/assets/images/currency/flag-for-russia.svg'
import usd from '/src/assets/images/currency/usa.svg'
// import { Currensy } from '../../types/types';

export function CurrencList({ onClick }): JSX.Element {
    const handleChange = (event: React.MouseEvent<HTMLElement>) => {
        const image = event.currentTarget.children[0] as HTMLImageElement;
        const name = event.currentTarget.children[1];

        const obj = {
            image: image.src,
            name: name.textContent,
        }

        onClick(obj)
    }

    return (
        <>
            <ul className="currency__list">
                <li className="currency" onClick={handleChange}>
                    <img src={vnd} alt="currency" className="currency__logo" />
                    <div className="currency__name">VND</div>
                </li>
                <li className="currency" onClick={handleChange}>
                    <img src={ru} alt="currency" className="currency__logo" />
                    <div className="currency__name">RU</div>
                </li>
                <li className="currency" onClick={handleChange}>
                    <img src={usd} alt="currency" className="currency__logo" />
                    <div className="currency__name">USD</div>
                </li>

            </ul>

        </>
    )
}