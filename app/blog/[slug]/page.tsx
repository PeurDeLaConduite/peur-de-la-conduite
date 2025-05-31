import { loadData } from "@/src/utils/blogData/loadData";
import { Metadata, ResolvingMetadata } from "next";
import SectionContainer from "@/app/blog/SectionContainer";
import BlogIcon from "@components/svg_Icon/Blog";
import { notFound } from "next/navigation";
import PostClient from "./PostClient";
import { BackButton } from "@/src/components/button/Buttons";

export async function generateStaticParams() {
    const { posts } = await loadData();
    return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const { posts } = await loadData();
    const post = posts.find((p) => p.slug === slug);
    if (!post) throw new Error(`Post not found for slug: ${slug}`);

    const parentMeta = await parent;
    const previousImages = parentMeta.openGraph?.images || [];

    return {
        title: post.seo?.title ?? post.title,
        description: post.seo?.description ?? post.excerpt,
        openGraph: {
            images: post.seo?.image
                ? [post.seo.image, ...previousImages]
                : previousImages,
        },
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { sections, posts, authors } = await loadData();
    const post = posts.find((p) => p.slug === slug);
    if (!post) return notFound();

    return (
        <SectionContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <PostClient post={post} sections={sections} authors={authors} />
            <div className="post-page__footer">
                <BackButton
                    href="/blog"
                    label="Retour"
                    className="post-page__back"
                />
            </div>
        </SectionContainer>
    );
}
