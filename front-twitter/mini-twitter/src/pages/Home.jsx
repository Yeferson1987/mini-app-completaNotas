/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';

const Home = () => {
    return (
        <div>
            <h1>Página Principal</h1>
            <p>¡Bienvenido a la página principal!</p>
            < PostList />            
            <Link to="/new">
                <button>Crear Nueva Publicación</button>
            </Link>
        </div>
    );
};

export default Home;