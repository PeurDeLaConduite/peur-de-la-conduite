import { Metadata } from "next";
// import "./blog.css";
// import Loader from "../../src/components/loader/Loader";
export const metadata: Metadata = {
    title: "Blog",
};
import SectionContainer from "../SectionContainer";
import BlogClientWrapper from "./BlogClientWrapper";
import BlogIcon from "@components/svg_Icon/Blog";
export default function Page() {
    return (
        <SectionContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <BlogClientWrapper />
        </SectionContainer>
    );
}
