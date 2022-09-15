import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Student() {
  return (
    <div class="container" style={{ marginTop: "12px" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Français</b>
          </Form.Label>
        </Form.Group>
      </Form>

      <div>
        <p>Madame : Hanitra</p>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Référence</th>
            <th>Nom</th>
            <th>Groupe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">001</th>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <th scope="row">002</th>
            <td>Data</td>
            <td>Data</td>
          </tr>
          <tr>
            <th scope="row">003</th>
            <td>Data</td>
            <td>Data</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Student;