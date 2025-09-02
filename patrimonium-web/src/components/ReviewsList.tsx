import type {Review} from "../types/Review.ts";

function RatingStars({ value }: { value: 1 | 2 | 3 | 4 | 5 }) {
    const stars = Array.from({ length: 5 }, (_, i) => (i < value ? "★" : "☆"));
    return <span aria-label={`${value} sur 5`}>{stars.join(" ")}</span>;
}

function ReviewsList({ reviews }: { reviews: Review[] }) {
    return (
        <section aria-label="Avis">
            <ul>
                {reviews.map((r) => (
                    <li key={r.id}>
                        <article>
                            <header>
                                <strong>{r.author}</strong>
                                <RatingStars value={r.rating} />
                            </header>
                            <p>{r.content}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ReviewsList;