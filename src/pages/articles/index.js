import * as React from "react";
import Layout from "@components/layout";
import Seo from "@components/seo";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const ArticlesPage = ({data}) => {
    return (
        <Layout pageTitle={"我的文章"}>
            <div className="article-list">
                <ul>
                    {
                        data.allMdx.nodes.map(
                            (node) => (
                                <li key={node.id}>
                                    <Link to={`/articles/${node.frontmatter.slug}`} className="article-link-text"><p>{node.frontmatter.title}</p></Link>
                                    <p>热度</p>
                                </li>
                            )   
                        )
                    }
                </ul>
            </div>

        </Layout>
    )
}

export const queryFileNodes = graphql`
    query {
        allMdx (sort: {frontmatter: {date: DESC}}){
            nodes{
                frontmatter {
                    date(formatString: "MMM D, YYYY")
                    title
                    slug
                    category
                }
                id
            }
        }
    }
`

export default ArticlesPage

export const Head = () => <Seo title="文章"/>