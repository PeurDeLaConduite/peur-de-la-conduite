"use client";
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
    useMemo,
} from "react";
import type { BlogData } from "@src/types/blog";

const PUBLIC_DATA_URL =
    process.env.NEXT_PUBLIC_BLOGDATA_URL ||
    "https://amplify-d2jefuxcjjakai-ma-publiquestoragebucketac0-tjlluvtci6g6.s3.eu-west-3.amazonaws.com/publique-storage/data.json";

interface DataBlogContextProps {
    data: BlogData | null;
    loading: boolean;
    error: Error | null;
}

const DataBlogContext = createContext<DataBlogContextProps | undefined>(undefined);

export function DataBlogProvider({
    children,
    initialData = null,
}: {
    children: ReactNode;
    initialData?: BlogData | null;
}) {
    const [data, setData] = useState<BlogData | null>(initialData);
    const [loading, setLoading] = useState(!initialData);
    const [error, setError] = useState<Error | null>(null);

    async function fetchData() {
        try {
            setLoading(true);
            const res = await fetch(PUBLIC_DATA_URL);
            if (!res.ok) throw new Error(`Erreur fetch : ${res.status}`);
            const json = (await res.json()) as BlogData;
            setData(json);
            setError(null);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error("Erreur inconnue"));
            }
        } finally {
            setLoading(false);
        }
    }
    

    useEffect(() => {
        if (!initialData) {
            fetchData();
        }
    }, [initialData]);

    const value = useMemo(
        () => ({ data, loading, error }),
        [data, loading, error]
    );

    return (
        <DataBlogContext.Provider value={value}>
            {children}
        </DataBlogContext.Provider>
    );
}

export function useDataBlog() {
    const ctx = useContext(DataBlogContext);
    if (!ctx) throw new Error("useDataBlog doit être utilisé dans un DataBlogProvider");
    return ctx;
}
