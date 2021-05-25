import React, {Component} from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, producto: "Yuca", precio: "100" , unidades: "5"},
  { id: 2, producto: "Lechuga", precio: "200" , unidades: "4"},
  { id: 3, producto: "Papa", precio: "500" , unidades: "12"},
  { id: 4, producto: "Mango", precio: "600" , unidades: "5"},
  { id: 5, producto: "Mecato", precio: "200" , unidades: "15"},

];

class App6 extends Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      producto: "",
      precio: "",
      unidades: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].producto = dato.producto;
        arreglo[contador].precio = dato.precio;
        arreglo[contador].unidades = dato.unidades;
      }
      return (
      contador++
      )
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el producto "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        return (
        contador++
        )
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
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
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo Producto</Button>
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
                  <td>{dato.producto}</td>
                  <td>{dato.precio}</td>
                  <td>{dato.unidades}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
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
                producto:
              </label>
              <input
                className="form-control"
                name="producto"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.producto}
              />
            </FormGroup>

            <FormGroup>
              <label>
                precio:
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precio}
              />
            </FormGroup>

            <FormGroup>
              <label>
                unidades:
              </label>
              <input
                className="form-control"
                name="unidades"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.unidades}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar producto</h3></div>
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
                name="producto"
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
                name="precio"
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
                name="unidades"
                type="number"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
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