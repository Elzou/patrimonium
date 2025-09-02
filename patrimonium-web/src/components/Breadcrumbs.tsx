function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }>; }) {
    return (
        <nav aria-label="Fil d'Ariane">
            <ol>
                {items.map((item, index) => (
                    <li key={item.label}>
                        {item.href && index < items.length - 1 ? (
                            <a href={item.href}>{item.label}</a>
                        ) : (
                            <span aria-current="page">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;