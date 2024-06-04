/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import EditPost from './pages/EditPost';
import PostForm from './components/PostForm';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/new" element={<PostForm editing={false} />} />
                    <Route path="/edit/:id" element={<EditPost editing={true} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;