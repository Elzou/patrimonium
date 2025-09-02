import type {Pattern} from "../types/Pattern.ts";
import PatternWorkshopStatus from "./PatternWorkshopStatus.tsx";

function PatternSummary({ pattern }: { pattern: Pattern }) {
    return (
        <article aria-labelledby="pattern-title">
            <header>
                <h1 id="pattern-title">{pattern.title} – {pattern.designer}</h1>
            </header>
            <div>
                <figure>
                    <img src={pattern.coverUrl} alt="Couverture du patron" />
                </figure>
                <section aria-label="Description du patron">
                    <h2>Description du patron</h2>
                    <p>{pattern.description}</p>
                    <dl>
                        <div>
                            <dt>Type de vêtement</dt>
                            <dd>Robe</dd>
                        </div>
                        <div>
                            <dt>Tissus recommandés</dt>
                            <dd>{pattern.recommendedFabrics.join(" · ")}</dd>
                        </div>
                        <div>
                            <dt>Taille</dt>
                            <dd>{pattern.sizes}</dd>
                        </div>
                        <div>
                            <dt>Quantité de tissu</dt>
                            <dd>
                                {pattern.fabricQuantity} – <a href="#">Voir le tableau des tailles</a>
                            </dd>
                        </div>
                    </dl>

                    <PatternWorkshopStatus />
                </section>
            </div>
            {pattern.gallery && pattern.gallery.length > 0 && (
                <footer aria-label="Galerie du patron">
                    <ul>
                        {pattern.gallery.map((src, i) => (
                            <li key={src}>
                                <img src={src} alt={`Miniature ${i + 1}`} />
                            </li>
                        ))}
                    </ul>
                </footer>
            )}
        </article>
    );
}

export default PatternSummary;