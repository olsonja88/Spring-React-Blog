import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(/api/categories)
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/api/categories/${id})`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application.json',
                'Content-Type': 'application.json'
            }
        }).then(() => {
            let updatedCategories = [...categories].filter(i => i.id !== id);
            setCategories(updatedCategories);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const categoryList = categories.map(category => {
        return <tr key={category.id}>
            <td style={{whiteSpace: 'nowrap'}}>{category.name}</td>
            <td>{category.posts.map(event => {
                return <div key={post.id}>{new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(post.date))}: {post.title}</div>
            })}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/categories/" + category.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(category.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="float-end">
                    <Button color="success" tag={Link} to="/categories/new">Add Category</Button>
                </div>
                <h3>My Category</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="20%">Name</th>
                        <th>Posts</th>
                        <th width="10%">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {CategoryList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};
