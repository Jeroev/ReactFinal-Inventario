import React, {Component} from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, categoria: "Verduras", articulos: "3" },
  { id: 2, categoria: "Frutas", articulos: "1" },
  { id: 3, categoria: "Mecato", articulos: "1" },

];

class App7 extends Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      categoria: "",
      articulos: "",
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
        arreglo[contador].categoria = dato.categoria;
        arreglo[contador].articulos = dato.articulos;
      }
      return (
      contador++
      )
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el categoria "+dato.id);
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
          <h1 className="title">Añadir Categoria</h1>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nueva categoria</Button>
          <br />
          <br />
          <Table id="Table1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoria</th>
                <th>Articulos</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.categoria}</td>
                  <td>{dato.articulos}</td>
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
           <div><h3>Editar Categoria</h3></div>
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
                Categoria:
              </label>
              <input
                className="form-control"
                name="categoria"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.categoria}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Articulos:
              </label>
              <input
                className="form-control"
                name="articulos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.articulos}
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
           <div><h3>Insertar categoria</h3></div>
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
                Categoria:
              </label>
              <input
                className="form-control"
                name="categoria"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Número de artículos:
              </label>
              <input
                className="form-control"
                name="articulos"
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


export default App7;