import React, {Component} from "react"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, category: "Verduras", article: "3" },
  { id: 2, category: "Frutas", article: "1" },
  { id: 3, category: "Mecato", article: "1" },

];

class App7 extends Component {
  state = {
    data: data,
    modReload: false,
    modInput: false,
    form: {
      id: "",
      category: "",
      article: "",
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
        array[count].category = dato.category;
        array[count].article = dato.article;
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
          <h1 className="title">Añadir Categoria</h1>
        <br />
          <Button color="success" onClick={()=>this.showmodInput()}>Insertar Nueva categoria</Button>
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
                  <td>{dato.category}</td>
                  <td>{dato.article}</td>
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
                name="category"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.category}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Articulos:
              </label>
              <input
                className="form-control"
                name="article"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.article}
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
                name="category"
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
                name="article"
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


export default App7;