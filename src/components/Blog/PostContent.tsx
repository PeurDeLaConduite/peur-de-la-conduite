// src/components/Blog/PostContent.tsx
import React from "react";
import VideoEmbed from "./VideoEmbed";
import { Post, Author } from "@src/types/blog";
import MarkdownRenderer from "./MarkdownRenderer";

interface PostContentProps {
    post: Post & { content: string }; // Markdown content
    author: Author;
}

const PostContent: React.FC<PostContentProps> = ({ post, author }) => (
    <article className="post-content">
        <div className="post-content__title">
            <h2>{post.title}</h2>
        </div>
        <div className="post-content__post">
            <div className="float-img">
                {post.videoUrl && (
                    <div className="post-content__video">
                        <VideoEmbed
                            url={post.videoUrl}
                            title={`Vidéo de ${post.title}`}
                        />
                    </div>
                )}
            </div>
            <div className="post-content__content">
                <MarkdownRenderer>{post.content}</MarkdownRenderer>
            </div>
            <div className="post-content__meta">
                <div className="post-content__info">
                    <span className="post-content__author">{author.name}</span>
                    <time
                        className="post-content__date"
                        dateTime={post.createdAt}
                    >
                        {new Date(post.createdAt).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </div>
                <div className="avatar">
                    <img
                        src={author.avatar}
                        alt={`Avatar de ${author.name}`}
                        className="av  shadow"
                    />
                    <img
                        src={author.avatar}
                        alt={`Avatar de ${author.name}`}
                        className="av "
                    />
                </div>
            </div>
        </div>
    </article>
);

export default PostContent;
