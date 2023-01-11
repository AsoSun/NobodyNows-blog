import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Calendar } from "lucide-react";
const Post = ({data, children}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <div className="article-gadget">
                <div className="date">
                    <span>
                        {/* <Calendar  className="icon"/> */}
                        发表日期：
                        {data.mdx.frontmatter.date}
                    </span>
                </div>
                <div>
                    <span>评论</span>
                </div>
                <div>
                    <span>点赞❤️</span>
                </div>
                <div>
                    <span>浏览</span>
                </div>
                <div className="category">
                    
                    <span className="tag">分类：{data.mdx.frontmatter.category}</span>
                </div>
            </div>
            {children}

            <div>
                <h2>评论</h2>
            </div>
        </Layout>
    )
}

export const queryPostContent = graphql`
    query ($id: String){
        mdx(id: {eq: $id}){
            frontmatter{
                title
                date(formatString: "MMM D, YYYY")
                category
            }
        }

    }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default Post
