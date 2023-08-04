import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import BlogNav from './BlogNav';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/api/categories')
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
            <td>{category.posts.map(post => {
                return <div key={post.id}>{new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(post.date))}: {post.title}</div>
            })}</td>
            <td>
                <ButtonGroup>
                    <Link className="btn text-light" to={"/categories/" + category.id}>Edit</Link>
                    <Button onClick={() => remove(category.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <BlogNav/>
            <h4 class="float-start text-light m-3">Categories</h4>
            <Link className="btn text-light float-end m-3" to="/categories/new">Add Category</Link>
            <Table className="table-dark">
                <thead>
                <tr>
                    <th width="20%">Name</th>
                    <th>Posts</th>
                    <th width="10%">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {categoryList}
                </tbody>
            </Table>
        </div>
    );
};

export default CategoryList;
