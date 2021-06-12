import { Component } from "react";
import Table from "../Table/Table";
import Form from "../Form/Form";
export default class Container extends Component {
  state = {
    tableItem: [
      {
        id: 1,
        name: "Иван",
        surename: "Иванов",
        phone: "+380505556589",
      },
    ],
    formIsActive: false,
  };
toggleForm=()=>{
    this.setState({
        formIsActive: this.state.formIsActive ? false:true
    })
}
addTableItem = (newItem) =>{
    this.setState({
        tableItem: [
            ...this.state.tableItem,
            {...newItem,
            id: Date.now()}
        ]
    })
}

deleteTableItem=(id)=>{
    this.setState({
        tableItem: this.state.tableItem.filter((item) => item.id !== id),
    }); 
}

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center">Книга контактов</h1>
        <div className="row justify-content-center">
          <div className="col-11 text-center">
            <Table onDelete={this.deleteTableItem} tableItem={this.state.tableItem}/>
            {this.state.formIsActive?(<Form toggleForm={this.toggleForm} onAdd={this.addTableItem}/>):
            (<div className="d-grid d-md-flex justify-content-md-end">
            <button onClick={this.toggleForm} className="btn btn-primary" type="button">
              Add
            </button>
          </div>)
            }
            
            
          </div>
        </div>
      </div>
    );
  }
}
