function InfoBanner({ title, message }: { title: string; message: string }) {
    return (
        <aside role="note" aria-label={title} data-color="info-500">
            <div>
                {/* placeholder for an icon */}
                <span aria-hidden>ℹ️</span>
                <div>
                    <strong>{title}</strong>
                    <p>{message}</p>
                </div>
            </div>
        </aside>
    );
}

export default InfoBanner;