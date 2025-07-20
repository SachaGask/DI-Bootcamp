import { useState, useEffect } from 'react';
import Article from './Article.jsx';

const Articles = () => {
    const [posts, setPosts] = useState([]);
    
    const getArticles = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
    }
    
    return (
        <div>
            <h2>News Articles</h2>
            <button onClick={getArticles}>Get Articles</button>
            {
                posts && posts.map((item) => {
                    return <Article key={item.id} title={item.title} body={item.body} />
                })
            }
        </div>
    )
}

export default Articles