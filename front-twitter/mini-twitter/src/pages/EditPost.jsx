/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PostForm from '../components/PostForm';

const EditPost = ({ editing = true }) => {
    return (
        <div className="edit-post">
            <h1>Editar Post</h1>
            <PostForm editing={editing} />
        </div>
    );
};

export default EditPost;
