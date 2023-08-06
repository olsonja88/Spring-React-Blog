import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect((id) => {
        setLoading(true);

        fetch(`/api/category${id}/posts`)
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
    }, []);

    const postList = posts.map(post => {
        return <tr key={post.id}>
            <td style={{whiteSpace: 'nowrap'}}>{post.name}</td>
            <td></td>
        </tr>
    })

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>

        </div>
    );
};

export default PostList;
