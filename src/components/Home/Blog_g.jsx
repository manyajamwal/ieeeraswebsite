import Blog from './Blog'
import './Blog_g.css'
import blog_data from '../../assets/blog_data'

const Blog_g = () => {
    return (
        // <div className='container'>
            <div className="blogs">
                {blog_data.map((blog) => {
                    return (<Blog key={blog.id} topic={blog.topic} author={blog.author} description={blog.description} site={blog.site} image={blog.image}/>)
                })}
            </div>
        // </div>

    )
}

export default Blog_g;