import { Card } from "react-bootstrap";
 
const Post4 = () => {
    return (
        <Card className="bg-dark">
            <Card.Img/>
            <Card.Body className="text-light">
                <Card.Title>
                    Post Four
                </Card.Title>
                <Card.Text>
                    This is the fourth post.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
 
export default Post4;
