import {useId, useState} from "react";

function Header({ onSearch }: { onSearch?: (searchValue: string) => void }) {
    const [searchValue, setSearchValue] = useState("");
    const searchId = useId();

    return (
        <header role="banner">
            <div>
                <a href="#" aria-label="Accueil Patrimonium">
                    {/* Replace with your SVG logo; kept inline for portability */}
                    <strong>Patrimonium</strong>
                </a>
            </div>
            <nav aria-label="Menu principal">
                <a href="#">Mon atelier</a>
                <a href="#">Communauté</a>
                <a href="#">Messages</a>
            </nav>
            <form
                role="search"
                aria-label="Rechercher"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch?.(searchValue);
                }}
            >
                <label htmlFor={searchId}>Rechercher</label>
                <input
                    id={searchId}
                    type="search"
                    name="q"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Rechercher"
                    inputMode="search"
                    aria-label="Rechercher"
                />
                <button type="submit">Chercher</button>
            </form>
        </header>
    );
}

export default Header;
