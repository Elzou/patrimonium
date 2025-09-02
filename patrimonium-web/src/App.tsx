import './App.css';
import {useState} from "react";
import Header from "./components/Header.tsx";
import Breadcrumbs from "./components/Breadcrumbs.tsx";
import PatternSummary from "./components/PatternSummary.tsx";
import Tabs from "./components/Tabs.tsx";
import ComponentWrapper from "./components/ComponentWrapper.tsx";
import ReviewsList from "./components/ReviewsList.tsx";
import InfoBanner from "./components/InfoBanner.tsx";
import {mockFabrics, mockPattern, mockReviews} from "./data/mockData.ts";
import FabricsGrid from "./components/FabricsGrid.tsx";

function App() {
    const [mainTab, setMainTab] = useState("Avis");
    const [assocTab, setAssocTab] = useState("Associations tissus");

    return (
        <div role="document">  {/* vérifier signification */}
            {/* <h1 className={"text-3xl font-bold underline"}>Patrimonium</h1> */}
            {/* Exemple Tailwind */}

            <Header />

            <main role="main">
                <Breadcrumbs
                    items={[
                        { label: "Communauté", href: "#" },
                        { label: "Créatrice : HAPPY AS A BEE", href: "#" },
                        { label: "Patron : Robe Aloha" },
                    ]}
                />

                <section aria-label="Contenu principal">
                    {/* Left column */}
                    <div>
                        <PatternSummary pattern={mockPattern} />

                        <Tabs
                            ariaLabel="Contenu secondaire"
                            value={mainTab as "Avis" | "Tableau des tailles" | "Mises à jour"}
                            onChange={(v) => setMainTab(v)}
                            tabs={{
                                "Avis": <ReviewsList reviews={mockReviews} />,
                                "Tableau des tailles": (
                                    <ComponentWrapper title="Tableau des tailles">
                                        <p>Intégrez ici le tableau de mesures. (Structure prête, pas de style.)</p>
                                    </ComponentWrapper>
                                ),
                                "Mises à jour": (
                                    <ComponentWrapper title="Mises à jour">
                                        <ul>
                                            <li>v1.0 — Publication initiale du patron</li>
                                        </ul>
                                    </ComponentWrapper>
                                ),
                            }}
                        />
                    </div>

                    {/* Right column */}
                    <aside aria-label="Suggestions et réalisations">
                        <Tabs
                            ariaLabel="Suggestions"
                            value={assocTab as "Associations tissus" | "Réalisations avec Aloha"}
                            onChange={(v) => setAssocTab(v)}
                            tabs={{
                                "Associations tissus": (
                                    <div>
                                        <InfoBanner
                                            title="Suggestion de tissus"
                                            message="Je te suggère ces tissus qui sont déjà dans ton stock. Ils ont le bon métrage et la bonne matière pour coudre Aloha !"
                                        />
                                        <FabricsGrid fabrics={mockFabrics} />
                                    </div>
                                ),
                                "Réalisations avec Aloha": (
                                    <ComponentWrapper title="Réalisations de la communauté">
                                        <p>Placeholders pour les miniatures de projets.</p>
                                    </ComponentWrapper>
                                ),
                            }}
                        />
                    </aside>
                </section>
            </main>
        </div>
    )
}

export default App
