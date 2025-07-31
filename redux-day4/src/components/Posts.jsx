import React, { useState, useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <ul>
      {posts.map(post => (
        <li className="posts-list" key={post.id}>
          <strong>{post.title}</strong><br />
          {post.body}
        </li>
      ))}
    </ul>
  );
}