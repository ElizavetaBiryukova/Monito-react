import { PetsSection } from "../pets-section/pets-section";
import { IntroBlue } from "../intro-blue/intro-blue";
import { ProductsSection } from "../products-section/products-section";
import { BrendsSection } from "../brends-section/brends-section";
import { IntroAdoption } from "../intro-adoption/intro-adoption";
import { KnowledgeSection } from "../knowledge-section/knowledge-section";


export function Main() {
    return (
        <>
            <main className="main">
                <h1 className="visually-hidden">Monito - pet shop</h1>
                <PetsSection />
                <IntroBlue />
                <ProductsSection />
                <BrendsSection />
                <IntroAdoption />
                <KnowledgeSection />
            </main>


        </>
    );
}