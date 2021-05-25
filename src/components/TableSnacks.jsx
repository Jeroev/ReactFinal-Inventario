import React, {Component} from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nombre: "Papas naturales", precio: "1000" , unidadesvendidas: "5", total: "5000"},
  { id: 2, nombre: "Papas de pollo", precio: "1000" , unidadesvendidas: "6", total: "6000"},
  { id: 3, nombre: "Papas de tomate", precio: "1200" , unidadesvendidas: "2", total: "2400"},

];

class App10 extends Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      precio: "",
      unidadesvendidas: "",
      total: "",
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
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].precio = dato.precio;
        arreglo[contador].unidadesvendidas = dato.unidadesvendidas;
      }
      return (
      contador++
      )
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el valor "+dato.id);
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
        <section id="return1">
            <h2>Para regresar a ventas: </h2>
            <a href="/Sales"><button id="return2">Regresar</button></a>
        </section>
          <h2 className="title">Añadir Dato</h2>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar Nuevo dato</Button>
          <br />
          <br />
          <Table id="Table1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Unidades vendidas</th>
                <th>Total</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.precio}</td>
                  <td>{dato.unidadesvendidas}</td>
                  <td>{dato.precio * dato.unidadesvendidas}</td>
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
           <div><h3>Editar dato</h3></div>
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
                Nombre:
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio:
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
                Unidades vendidas:
              </label>
              <input
                className="form-control"
                name="Unidades vendidas"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.unidadesvendidas}
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
           <div><h3>Insertar dato</h3></div>
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
                Nombre:
              </label>
              <input
                className="form-control"
                name="nombre"
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
                Unidades vendidas:
              </label>
              <input
                className="form-control"
                name="unidades vendidas"
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


export default App10;