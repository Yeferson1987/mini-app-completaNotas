/* eslint-disable no-unused-vars */
import React from 'react';
import PostForm from '../components/PostForm';

const EditPost = () => {
    return (
        <div>
            <h1>Editar Post</h1>
            <PostForm editing={true} />
        </div>
    );
};

export default EditPost;
