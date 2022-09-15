import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ marginTop: "12px", marginLeft: "12px", marginRight: "12px" }}>
      <div class="row">
        <div class="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Français</Card.Title>
              <Card.Text>Matière</Card.Text>

              <Link to="/student">
                <Button variant="primary">Voir</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div class="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Français</Card.Title>
              <Card.Text>Matière</Card.Text>
              <Button variant="primary">Voir</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Français</Card.Title>
              <Card.Text>Matière</Card.Text>
              <Button variant="primary">Voir</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;