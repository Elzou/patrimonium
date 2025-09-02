function ComponentWrapper({ title, children, footer, as = "section" as const, ariaLabel }: { title?: string; children?: React.ReactNode; footer?: React.ReactNode; as?: "section" | "article" | "div"; ariaLabel?: string; }) {
    const As = as;
    return (
        <As aria-label={ariaLabel}>
            {title ? <h3>{title}</h3> : null}
            <div>{children}</div>
            {footer ? <div>{footer}</div> : null}
        </As>
    );
}

export default ComponentWrapper;