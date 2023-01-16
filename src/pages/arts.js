import { graphql } from "gatsby";
import { GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ArtPage = ({data}) => {
    return (
        <Layout pageTitle={"「随便画画」精选集"} className='arts'>
            <div className="gallery">
                <h2>2012 - 2014</h2>
                <ul>
            {   
                data.allFile.nodes.map(
                    node => (
                            <li key={node.id}>
                                <div className="image"><GatsbyImage image={getImage(node)}/></div>
                                <span className="description">{node.name}</span>
                            </li>   
                    )
                )
            }
             </ul>
            </div>
        </Layout>
    )
}

export const queryPictures = graphql`
    query{
        allFile(filter:{sourceInstanceName: {eq: "pictures"}}) {
            nodes {
                id
                name
                childImageSharp{    
                    gatsbyImageData(width: 300)  
                }
            }
        }
    }
`


export default ArtPage

export const Head = () => <Seo title="随便画画"/>