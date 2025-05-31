"use client";
import React from "react";
import { DataBlogProvider, useDataBlog } from "@context/DataBlogProvider";
import Blog from "@/src/components/Blog/Blog";
import Loader from "../../src/components/loader/Loader";
import type { BlogData } from "@src/types/blog";

function InnerBlog() {
    const { data, loading, error } = useDataBlog();

    if (loading) return <Loader />;
    if (error) return <p>Erreur : {error.message}</p>;
    return <Blog data={data!} noWrapper />;
}

export default function BlogClientWrapper({ initialData }: { initialData: BlogData }) {
    return (
        <DataBlogProvider initialData={initialData}>
            <InnerBlog />
        </DataBlogProvider>
    );
}
