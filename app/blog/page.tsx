// app/blog/page.tsx
import { Metadata } from "next";
import SectionContainer from "./SectionContainer";
import BlogClientWrapper from "./BlogClientWrapper";
import BlogIcon from "@components/svg_Icon/Blog";
import { loadData } from "@utils/blogData/loadData";

export const metadata: Metadata = {
    title: "Blog",
};

export default async function Page() {
    const data = await loadData(); // FETCH côté serveur !

    return (
        <SectionContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <BlogClientWrapper initialData={data} />
        </SectionContainer>
    );
}
