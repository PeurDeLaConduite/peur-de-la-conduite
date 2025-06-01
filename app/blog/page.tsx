// app/blog/page.tsx
import { Metadata } from "next";
import SectionContainer from "./SectionContainer";
import BlogClientWrapper from "./BlogClientWrapper";
import BlogIcon from "@components/svg_Icon/Blog";


export const metadata: Metadata = {
    title: "Blog",
};

export default async function Page() {
    return (
        <SectionContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <BlogClientWrapper />
        </SectionContainer>
    );
}
