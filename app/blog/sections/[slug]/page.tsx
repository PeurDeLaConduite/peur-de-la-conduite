// app/blog/sections/[slug]/page.tsx
import { loadData } from "@/src/utils/blogData/loadData"; // ✅ maintenant externe
import { Metadata, ResolvingMetadata } from "next";
import PostContent from "@components/Blog/PostContent";
import ButtonPage from "@components/Blog/ButtonPage";
import SectionContainer from "@/app/blog/SectionContainer";
import BlogIcon from "@components/svg_Icon/Blog";
export async function generateStaticParams() {
    const { sections } = await loadData();
    return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const { sections, posts } = await loadData();

    const section = sections.find((s) => s.slug === slug)!;
    const seo = section.seo ?? {
        title: section.title,
        description: section.description,
        image: undefined,
    };

    const parentMeta = await parent;
    const previousImages = parentMeta.openGraph?.images || [];

    const titles =
        section.postIds
            ?.map((id) => posts.find((p) => p.id === id)?.title)
            .filter(Boolean)
            .join(" • ") || "";

    return {
        title: seo.title || section.title,
        description: `${seo.description || section.description}${
            titles ? " | Articles : " + titles : ""
        }`,
        openGraph: {
            images: seo.image ? [seo.image, ...previousImages] : previousImages,
        },
    };
}

export default async function SectionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { sections, posts, authors } = await loadData();

    const section = sections.find((s) => s.slug === slug)!;
    const postsInSection = posts.filter(
        (post) =>
            post.status === "published" && post.sectionIds.includes(section.id)
    );

    return (
        <SectionContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <ButtonPage href="/blog" />
            <div className="section-page section-card">
                <div className="section-card-header">
                    <h1 className="section-card-title">{section.title}</h1>
                    <p className="section-card-desc">{section.description}</p>
                </div>

                <div className="section-page__posts">
                    {postsInSection.map((post) => {
                        const author = authors.find(
                            (a) => a.id === post.authorId
                        )!;
                        return (
                            <PostContent
                                key={post.id}
                                post={post}
                                author={author}
                            />
                        );
                    })}
                </div>
            </div>
        </SectionContainer>
    );
}
