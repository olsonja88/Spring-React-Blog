import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup } from 'react-bootstrap';
import { Label, Input } from 'reactstrap';
import BlogNav from './BlogNav';

const CategoryEdit = () => {
    const initialFormState = {
        name: ''
    };

    const [category, setCategory] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/categories/${id}`)
                .then(response => response.json())
                .then(data => setCategory(data));
        }
    }, [id, setCategory]);

    const handleChange = (post) => {
        const {name, value} = post.target

        setCategory({...category, [name]: value })
    }

    const handleSubmit = async (post) => {
        post.preventDefault();

        await fetch(`/api/category${category.id ? `/${category.id}` : ''}`, {
            method: (category.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(category)
        });
        setCategory(initialFormState);
        navigate('/categories');
    }

    const title = <h2 className="text-light mt-3">{category.id ? 'Edit Category' : 'Add Category'}</h2>;

    return (
        <div>
            <BlogNav/>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label className="text-light" for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={category.name || ''} onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup className="mt-3">
                        <Button type="submit">Save</Button>{' '}
                        <Link className="btn text-light" to="/categories">Cancel</Link>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
};

export default CategoryEdit;
