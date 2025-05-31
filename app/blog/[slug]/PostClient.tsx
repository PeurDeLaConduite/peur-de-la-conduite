"use client";
import Blog from "@components/Blog/Blog";
import type { Section, Post, Author } from "@src/types/blog";

type Props = {
    post: Post;
    sections: Section[];
    authors: Author[];
};

export default function PostClient({ post, sections, authors }: Props) {
    // Ici, tu peux utiliser tous tes hooks React si besoin
    // Tu peux aussi encapsuler dans un provider si tu veux

    return (
        <Blog data={{ sections, posts: [post], authors }} singlePost={post} />
    );
}
