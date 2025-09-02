import type {Fabric} from "../types/Fabric.ts";

function FabricCard({ fabric }: { fabric: Fabric }) {
    return (
        <article aria-label={fabric.name}>
            <figure>
                <img src={fabric.imageUrl} alt="Aperçu tissu" />
            </figure>
            <header>
                <h4>{fabric.name}</h4>
                {fabric.brand && <p>{fabric.brand}</p>}
            </header>
        </article>
    );
}

export default FabricCard;