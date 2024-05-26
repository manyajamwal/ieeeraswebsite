import './Blog.css';

const Blog = (props) => {
    const handleClick = () => {
        const url = props.site;
        window.open(url, '_blank');
    }
    return (
        // <a href={props.site}>
        // <Link to={props.site}>
        <a onClick={handleClick}>
            <div className="blog-container">
                <div className="info">
                    <h3>{props.topic}</h3>
                    <h5>{props.author}</h5>
                    <p className='small'>Last updated on 20th April 2024</p>
                    <br />
                    <p>{props.description}</p>
                    {/* <a onClick={handleClick}>Visit link</a> */}
                </div>
                <img src={props.image} className='resize'/>
            </div>
        </a>
        // </Link>
    );
}

export default Blog;
