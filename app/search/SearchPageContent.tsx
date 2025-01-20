"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation"; // Import du hook useRouter
import { useSearch } from "../../src/utils/context/SearchContext";
import searchQuery from "../../src/utils/searchMenu";
import { useURLParams } from "../../src/utils/useURLParams";

export default function SearchPageContent() {
    const router = useRouter();
    const { results, setResults, menuData, setQuery } = useSearch();
    const [validQuery, setValidQuery] = useState<string>("");
    const { getParams } = useURLParams();
    const badKeyWord = getParams("badKeyWord");

    useEffect(() => {
        const queryFromUrl = getParams("query");

        const newValidQuery = queryFromUrl || "";
        if (newValidQuery !== validQuery) {
            setValidQuery(newValidQuery);
            setQuery(newValidQuery);
        }

        if (queryFromUrl && menuData && results.length === 0) {
            const searchResults = searchQuery(menuData, queryFromUrl);

            // Log des résultats de recherche
            console.log("Search Results: ", searchResults);
            console.log("Current Results: ", results);

            if (JSON.stringify(searchResults) !== JSON.stringify(results)) {
                setResults(searchResults);
            }
        }
    }, [
        getParams,
        menuData,
        validQuery,
        badKeyWord,
        setQuery,
        setResults,
        results,
    ]);

    const resultsCount = results.length;
    const validSearch = `${resultsCount} résultat${
        resultsCount > 1 ? "s" : ""
    } de recherche pour : "${validQuery}"`;
    const inValidSearch = `0 résultat pour "${badKeyWord}"`;

    const searchMessage = badKeyWord ? inValidSearch : validSearch;

    const uniqueResults = useMemo(
        () =>
            results.filter(
                (result, index, self) =>
                    index ===
                    self.findIndex(
                        (r) =>
                            r.path === result.path &&
                            r.text.trim() === result.text.trim()
                    )
            ),
        [results]
    );

    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>{searchMessage}</h2>;
            <div className="s1">
                {!badKeyWord ? (
                    uniqueResults.map((result) => (
                        <div key={`${result.path}-${result.text}`}>
                            <button
                                className="result-link"
                                onClick={() => {
                                    // Vérifier si result.go est défini
                                    if (result.go) {
                                        router.push(
                                            `${result.path}${result.go}`
                                        );
                                    } else {
                                        router.push(result.path);
                                    }
                                }}
                            >
                                {result.text}
                            </button>
                        </div>
                    ))
                ) : (
                    <p>
                        {badKeyWord ? `Aucun résultat à afficher.` : badKeyWord}
                    </p>
                )}
                <button
                    className="result-link"
                    onClick={() => router.push("/#slider?slideRef=1")}
                >
                    TEST
                </button>
            </div>
        </section>
    );
}
