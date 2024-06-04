import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../api';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deletePost(id);
            setPosts(posts.filter(post => post.id !== id));
        } catch (err) {
            console.error('Error deleting post:', err);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div className="post-list">
            {posts.map((post) => (
                <div key={post.id} className="post-item">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={() => handleEdit(post.id)}>Editar</button>
                    <button onClick={() => handleDelete(post.id)}>Borrar</button>
                </div>
            ))}
        </div>
    );
};

export default PostList;