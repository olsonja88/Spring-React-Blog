import React from 'react';
import BlogNav from './BlogNav';
import Posts from './Posts';
//import { Link } from 'react-router-dom';
// import { Button, Container } from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            <BlogNav/>
            <Posts/>
        </div>
    );
}

export default Home;
