import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api';
import { Link } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((response) => {
            setPosts(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        deletePost(id).then(() => {
            setPosts(posts.filter(post => post.id !== id));
        });
    };

    return (
        <div>
            <h1>Posts</h1>
            <Link to="/new">Crear nuevo post</Link>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        <button onClick={() => handleDelete(post.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
