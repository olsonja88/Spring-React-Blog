import { Card } from "react-bootstrap";

const Post3 = () => {
    return (
        <Card className="bg-dark">
            <Card.Img/>
            <Card.Body className="text-light">
                <Card.Title>
                    Post Three
                </Card.Title>
                <Card.Text>
                    This is the third post.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
 
export default Post3;
