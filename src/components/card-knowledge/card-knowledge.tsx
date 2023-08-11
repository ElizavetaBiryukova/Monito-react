import { CardKnowledgeType } from "../../types/types";

type CardKnowledgeProps = {
    cardsKnowledge: CardKnowledgeType;
}

export function CardKnowledge({cardsKnowledge}: CardKnowledgeProps): JSX.Element {
    return (
        <>
            <li className="knowledge__item">
                <img
                    src={cardsKnowledge.image}
                    alt="pameran"
                    className="knowledge__image"
                />
                <div className="knowledge__text">
                    <div className="knowledge__mark">Pet knowledge</div>
                    <h4 className="knowledge__title">
                    {cardsKnowledge.title}
                    </h4>
                    <p className="knowledgw__description">
                    {cardsKnowledge.text}
                    </p>
                </div>
            </li>
        </>

    )
}