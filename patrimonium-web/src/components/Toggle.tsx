function Toggle({ label, checked, onChange, name }: { label: string; checked: boolean; onChange: (v: boolean) => void; name: string; }) {
    return (
        <div role="group" aria-label={label}>
            <span>{label}</span>
            <div>
                <label>
                    <input
                        type="radio"
                        name={name}
                        checked={checked}
                        onChange={() => onChange(true)}
                        aria-checked={checked}
                    />
                    Oui
                </label>
                <label>
                    <input
                        type="radio"
                        name={name}
                        checked={!checked}
                        onChange={() => onChange(false)}
                        aria-checked={!checked}
                    />
                    Non
                </label>
            </div>
        </div>
    );
}

export default Toggle;