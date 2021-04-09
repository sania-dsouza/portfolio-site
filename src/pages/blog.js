import React from "react"
import Layout from "../components/layout"
import BlogBlock from "../components/blogBlock"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const BlogPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Reading</title>
      <link rel="canonical" href="http://localhost:8000/blog" />
    </Helmet>
    <SEO title="Reading" />
    
    <div style= {{ textAlign: `center`, marginTop: `1rem`, padding: `auto`, color: `white`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}}>
      <div>Reading</div>
    </div>
    
    {/* for the projects/blog posts that need to be displayed */}
    <div className= "blockWrapper" style= {{ width: `100%`, height: `160%`, margin: `auto`}}>
      <BlogBlock></BlogBlock>
    </div>

    <div style= {{ textAlign: `center`, padding: `auto`, color: `white`, fontFamily: 'Vollkorn', fontWeight: `bold`, fontSize: `32px`}} > For more: </div>
    <div className="blogWidgetDiv" style = {{ textAlign: `center`, marginBottom: `1.5em` }}>
      <div> <a href= "https://dev.to/saniadsouza"> <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" title="DevTO" alt="DevTO"/> </a> </div> 
      <div> <a href= "https://medium.com/me/stories/public"> <img src="https://ucee13d5d93634b5edabe103b0b5.previews.dropboxusercontent.com/p/thumb/ABL3jK9XV4RDmmjfrsrwIxh0fWHRWWMLd8b9N0PBN9ylCfYGzGdTHn3R97vVPWAjF-WT-Ap1FEnxW1EDJvULP_P9dpVRLO-JwK6cOnZJ3vEJeBM9uGV58gzo-Svk44hFvgqoK4QBJ2aaNEun6Avy1UKfSoFWbEauR7ZtxmHSSNKWdPzsmDh_Py_wS4d7IemOwf_-SzeNFMfwN7-yH7uJy8NhqML2XGqQaPcLGxPXktpHPiBgSf4WcY2XmnyQJjeaXR_1O2Aun1HN1Zvsxoqe3j6WFrIwB4dhsuphx5OUgZgy825nFQjHqy1HwnXQjxl_MYmLsPKpXWkq8n12Tb6fvM09bPNQtUga4m-wgU-N98cR9Q/p.png?fv_content=true" title="Medium" alt="Medium" />  </a></div>
    </div>
    
  </Layout>
)

export default BlogPage
