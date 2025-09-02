import type {Fabric} from "../types/Fabric.ts";
import FabricCard from "./FabricCard.tsx";

function FabricsGrid({ fabrics }: { fabrics: Fabric[] }) {
    return (
        <section aria-label="Suggestions de tissus">
            <ul>
                {fabrics.map((f) => (
                    <li key={f.id}>
                        <FabricCard fabric={f} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FabricsGrid;