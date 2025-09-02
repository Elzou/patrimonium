import {useMemo} from "react";

function Tabs<T extends string>(
    {
       tabs,
       value,
       onChange,
       ariaLabel,
   }: {
    tabs: Record<T, React.ReactNode>;
    value: T;
    onChange: (v: T) => void;
    ariaLabel?: string;
}) {
    const keys = useMemo(() => Object.keys(tabs) as T[], [tabs]);
    return (
        <div role="tablist" aria-label={ariaLabel}>
            {keys.map((key) => (
                <button
                    key={String(key)}
                    role="tab"
                    aria-selected={value === key}
                    aria-controls={`panel-${String(key)}`}
                    id={`tab-${String(key)}`}
                    onClick={() => onChange(key)}
                >
                    {String(key)}
                </button>
            ))}
            {keys.map((key) => (
                <section
                    key={String(key)}
                    role="tabpanel"
                    id={`panel-${String(key)}`}
                    aria-labelledby={`tab-${String(key)}`}
                    hidden={value !== key}
                >
                    {tabs[key]}
                </section>
            ))}
        </div>
    );
}

export default Tabs;