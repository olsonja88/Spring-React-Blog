import { Card } from "react-bootstrap";
 
const Post1 = () => {
    return (
        <Card className="bg-dark">
            <Card.Img/>
            <Card.Body className="text-light">
                <Card.Title>
                    Post One
                </Card.Title>
                <Card.Text>
                    This is the first post.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
 
export default Post1;
