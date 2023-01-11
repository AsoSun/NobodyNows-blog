import React from 'react'
import useSiteMetaData from '../hooks/useSiteMetadata'

const Seo = ({title}) => {
    const data = useSiteMetaData()

    return (
        <title>{title} | {data.title}</title>
    )
}

export default Seo