import { Card } from "react-bootstrap";
 
const Post2 = () => {
    return (
        <Card className="bg-dark">
            <Card.Img/>
            <Card.Body className="text-light">
                <Card.Title>
                    Post Two
                </Card.Title>
                <Card.Text>
                    This is the second post.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
 
export default Post2;
