import { useEffect, useState } from 'react';
import { getPost } from '../api';
import { useParams, Link } from 'react-router-dom';

const PostItem = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getPost(id).then((response) => {
            setPost(response.data);
        });
    }, [id]);

    if (!post) return <div>cargando...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`/edit/${post.id}`}>Editar</Link>
        </div>
    );
};

export default PostItem;
