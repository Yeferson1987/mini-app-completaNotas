/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { createPost, getPost, updatePost } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const PostForm = ({ editing }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (editing) {
            getPost(id).then((response) => {
                setTitle(response.data.title);
                setContent(response.data.content);
            });
        }
    }, [editing, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, content };

        if (editing) {
            updatePost(id, post).then(() => {
                navigate('/');
            });
        } else {
            createPost(post).then(() => {
                navigate('/');
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <div>
                <label>Título</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Contenido</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
            </div>
            <button type="submit">Enviar</button>
            <button type="button" onClick={() => navigate('/')}>Volver</button>
        </form>
    );
};

export default PostForm;