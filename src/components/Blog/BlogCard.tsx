import { useRouter } from "next/navigation";
import Link from "next/link";
import VideoEmbed from "./VideoEmbed";
import ButtonLink from "../button/ButtonLink";
import { Post, Author } from "@/src/types/blog";

type Props = {
    post: Post;
    author: Author;
    hovered?: boolean;
    faded?: boolean;
    onHover?: () => void;
    onUnhover?: () => void;
};

export default function BlogCard({
    post,
    author,
    hovered,
    faded,
    onHover,
    onUnhover,
}: Props) {
    const router = useRouter();

    // Gestion du clic : évite les conflits avec liens internes
    const handleCardClick = (e: React.MouseEvent) => {
        if (
            (e.target as HTMLElement).closest("a") ||
            (e.target as HTMLElement).closest("button")
        ) {
            return;
        }
        router.push(`/blog/${post.slug}`);
    };

    // Accessibilité : activation clavier
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            router.push(`/blog/${post.slug}`);
        }
    };

    return (
        <article
            className={`blog-card${hovered ? " is-hovered" : ""}${
                faded ? " is-faded" : ""
            }`}
            tabIndex={0}
            aria-label={`Voir l'article : ${post.title}`}
            style={{ cursor: "pointer" }}
            onClick={handleCardClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={onHover}
            onMouseLeave={onUnhover}
        >
            <div className="blog-card__header">
                <h3 className="blog-card__title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="blog-card__excerpt">{post.excerpt}</p>
                {post.videoUrl && (
                    <div className="blog-card__video">
                        <VideoEmbed
                            url={post.videoUrl}
                            title={`Vidéo de ${post.title}`}
                        />
                    </div>
                )}
                <div
                    className="blog-card__footer"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div className="blog-card__meta">
                        {author.name},{" "}
                        {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </div>
                    <div className="blog-card__link">
                        <ButtonLink href={`/blog/${post.slug}`}>
                            Lire l&apos;article
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </article>
    );
}
