import { CardsKnowledge } from "../../types/types";
import { CardKnowledge } from "../card-knowledge/card-knowledge";

type KnowledgeProps = {
    cardsKnowledge: CardsKnowledge
}

export function KnowledgeSection({ cardsKnowledge }: KnowledgeProps): JSX.Element {
    return (
        <>
            <section className="knowledge">
                <div className="knowledge__caption caption">
                    <p className="caption__question">You already know ?</p>
                    <h3 className="caption__title">Useful pet knowledge</h3>
                </div>
                <div className="knowledge__view view">
                    <a href="!#" className="view__link">
                        <div className="view__sign">View more &gt;</div>
                    </a>
                </div>
                <ul className="knowledge__list">
                {cardsKnowledge.map((card) => (
                    <CardKnowledge
                        key={card.id}
                        cardsKnowledge={card}
                    />
                ))}
                </ul>
            </section>
        </>
    );
}