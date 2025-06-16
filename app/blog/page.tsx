// app/blog/page.tsx
import { Metadata } from "next";
import SectionContainer from "./SectionContainer";
import BlogClientWrapper from "./BlogClientWrapper";
import BlogIcon from "@components/svg_Icon/Blog";

export const metadata: Metadata = {
    title: "Blog",
    alternates: {
        canonical: "https://peur-de-la-conduite.fr/blog",
        media: {
            "only screen and (max-width: 900px)":
                "https://mobile.peur-de-la-conduite.fr/blog",
            "only screen and (min-width: 900px)":
                "https://desktop.peur-de-la-conduite.fr/blog",
        },
    },
    description:
        "Découvrez une série d’articles dédiés à la peur de la conduite : conseils pour surmonter l’amaxophobie, gérer le stress au volant, réussir le permis et retrouver confiance.",
};

export default async function Page() {
    return (
        <SectionContainer id="blog" title="Blog" icon={<BlogIcon />}>
            <BlogClientWrapper />
        </SectionContainer>
    );
}
