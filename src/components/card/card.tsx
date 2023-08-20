import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardType } from "../../types/types"
import { Currensy } from '../../types/types';
import { Curr } from '../../types/types';
import axios from 'axios';

type CardProps = {
    card: CardType;
    сurrensy: Currensy;
}

interface RateListI {
    currencyList: Array<Curr>,
}

export function Card({ card, сurrensy }: CardProps): JSX.Element {
    const [rateList, setRateList] = useState<RateListI>({
        currencyList: [],
    })

    let indexCurr: number = 1;
    Object.entries(rateList.currencyList)?.map(currency => {
        if (сurrensy.name === 'VND') {
            indexCurr = currency[1].VND.Value;
        } else if (сurrensy.name === 'USD') {
            indexCurr = currency[1].VND.Value;
        } else if (сurrensy.name === 'RU') {
            indexCurr = 1;
        }
    })

    const navigate = useNavigate();

    const navigateToCardHandler = (id: string) => {
        navigate(`/card/${id}`);
    }

    useEffect(() => {
        const promise = axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        promise.then((res) => {
            const rates = res.data
            setRateList({
                currencyList: [rates.Valute],
            })
        })
    }, [])

    return (
        <>
            <li className="catalog__card card" onClick={() => navigateToCardHandler(card.id)}>
                <img
                    src={card.image}
                    alt="dog"
                    className="card__img"
                />
                <div className="card__text">
                    <h4 className="card__title">{card.name}</h4>
                    <p className="card__description">
                        <span className="card__gene">
                            Gene: <span className="card__gene card__gene--bold">{card.gene}</span>
                        </span>
                        <span className="card__decoration">·</span>
                        <span className="card__age">
                            Age: <span className="card__age card__age--bold">{card.age} months</span>
                        </span>
                    </p>
                    <p className="card__value">
                        <span className="card__price">{Math.ceil(card.price / indexCurr).toLocaleString()}</span>
                        <span className="card__currency"> {сurrensy.name}</span>
                    </p>
                </div>
            </li>
        </>

    )
}