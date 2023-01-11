import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const MusicPage = () => {
    return(
        <Layout pageTitle={"音乐作品集"}>
            <h1>咱们的大脑通过音乐产生了共振</h1>
        </Layout>
    )
}

export const Head = () => <Seo title={"音乐作品集"} />

export default MusicPage