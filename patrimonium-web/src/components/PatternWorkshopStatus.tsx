import {useState} from "react";
import ComponentWrapper from "./ComponentWrapper.tsx";
import Toggle from "./Toggle.tsx";

function PatternWorkshopStatus() {
    const [inStock, setInStock] = useState(false);
    const [prepared, setPrepared] = useState(false);
    const [sewn, setSewn] = useState(false);

    return (
        <ComponentWrapper title="Mon atelier">
            <div>
                <Toggle label="Dans mon stock" name="stock" checked={inStock} onChange={setInStock} />
                <Toggle label="Patron préparé" name="prepared" checked={prepared} onChange={setPrepared} />
                <Toggle label="Déjà cousu" name="sewn" checked={sewn} onChange={setSewn} />
            </div>
        </ComponentWrapper>
    );
}

export default PatternWorkshopStatus;