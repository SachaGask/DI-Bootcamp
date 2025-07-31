import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './slice';
import ReactionButton from './ReactionButton';

export default function PostsList() {
  const posts = useSelector(state => state.posts.posts);
  const status = useSelector(state => state.posts.status);
  const error = useSelector(state => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(fetchPosts());
  }, [dispatch, status]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Erreur : {error}</div>;

  return (
    <>
      <h3>The Posts Project</h3>
      <section>
        {posts && posts.map(post => (
          <article key={post.id} className="posts-list">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <ReactionButton reactions={post.reactions} postId={post.id} />
          </article>
        ))}
      </section>
    </>
  );
}
