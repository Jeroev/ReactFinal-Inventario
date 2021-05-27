import React, {Component} from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, product: "Yuca", price: "100" , units: "5"},
  { id: 2, product: "Lechuga", price: "200" , units: "4"},
  { id: 3, product: "Papa", price: "500" , units: "12"},
  { id: 4, product: "Mango", price: "600" , units: "5"},
  { id: 5, product: "Mecato", price: "200" , units: "15"},

];

class App6 extends Component {
  state = {
    data: data,
    modReload: false,
    modInput: false,
    form: {
      id: "",
      product: "",
      price: "",
      units: ""
    },
  };

  showmodReload = (dato) => {
    this.setState({
      form: dato,
      modReload: true,
    });
  };

  closemodReload = () => {
    this.setState({ modReload: false });
  };

  showmodInput = () => {
    this.setState({
      modInput: true,
    });
  };

  closemodInput = () => {
    this.setState({ modInput: false });
  };

  edit = (dato) => {
    var count = 0;
    var array = this.state.data;
    array.map((register) => {
      if (dato.id === register.id) {
        array[count].product = dato.product;
        array[count].price = dato.price;
        array[count].units = dato.units;
      }
      return (
      count++
      )
    });
    this.setState({ data: array, modReload: false });
  };

  delete = (dato) => {
    var option = window.confirm("Estás Seguro que deseas Eliminar el category "+dato.id);
    if (option === true) {
      var count = 0;
      var array = this.state.data;
      array.map((register) => {
        if (dato.id === register.id) {
          array.splice(count, 1);
        }
        return (
        count++
        )
      });
      this.setState({ data: array, modReload: false });
    }
  };

  input= ()=>{
    var newValue= {...this.state.form};
    newValue.id=this.state.data.length+1;
    var list= this.state.data;
    list.push(newValue);
    this.setState({ modInput: false, data: list });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {

    return (
      <>
        <Container>
          <h1 className="title">Añadir Producto</h1>
        <br />
          <Button color="success" onClick={()=>this.showmodInput()}>Insertar Nuevo Producto</Button>
          <br />
          <br />
          <Table id="Table1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Unidades</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.product}</td>
                  <td>{dato.price}</td>
                  <td>{dato.units}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.showmodReload(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.delete(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modReload}>
          <ModalHeader>
           <div><h3>Editar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Producto:
              </label>
              <input
                className="form-control"
                name="product"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.product}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio:
              </label>
              <input
                className="form-control"
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.price}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Unidades:
              </label>
              <input
                className="form-control"
                name="units"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.units}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.edit(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.closemodReload()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modInput}>
          <ModalHeader>
           <div><h3>Insertar productos</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Producto:
              </label>
              <input
                className="form-control"
                name="product"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio:
              </label>
              <input
                className="form-control"
                name="price"
                type="number"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Unidades:
              </label>
              <input
                className="form-control"
                name="units"
                type="number"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.input()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.closemodInput()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}


export default App6;