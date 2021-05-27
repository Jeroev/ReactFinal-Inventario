import React, {Component} from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, name: "Papas naturales", price: "1000" , unitsell: "5", total: "5000"},
  { id: 2, name: "Papas de pollo", price: "1000" , unitsell: "6", total: "6000"},
  { id: 3, name: "Papas de tomate", price: "1200" , unitsell: "2", total: "2400"},

];

class App10 extends Component {
  state = {
    data: data,
    modReload: false,
    modInput: false,
    form: {
      id: "",
      name: "",
      price: "",
      unitsell: "",
      total: "",
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
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].name = dato.name;
        arreglo[contador].price = dato.price;
        arreglo[contador].unitsell = dato.unitsell;
      }
      return (
      contador++
      )
    });
    this.setState({ data: arreglo, modReload: false });
  };

  delete = (dato) => {
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
      this.setState({ data: arreglo, modReload: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modInput: false, data: lista });
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
          <Button color="success" onClick={()=>this.showmodInput()}>Insertar Nuevo dato</Button>
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
                  <td>{dato.name}</td>
                  <td>{dato.price}</td>
                  <td>{dato.unitsell}</td>
                  <td>{dato.price * dato.unitsell}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.showmodReload(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.delete(dato)}>delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modReload}>
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
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.name}
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
                Unidades vendidas:
              </label>
              <input
                className="form-control"
                name="unitsell"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.unitsell}
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
                name="name"
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
                Unidades vendidas:
              </label>
              <input
                className="form-control"
                name="unitsell"
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


export default App10;