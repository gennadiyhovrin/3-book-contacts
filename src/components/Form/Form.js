import { Component } from "react";

export default class Form extends Component {
  state = {
    newTableItem: {
      name: "",
      surename: "",
      phone: "",
    },
    buttonIsActive: true,
  };
  onChange = (e) => {
    this.setState({
      newTableItem: {
        ...this.state.newTableItem,
        [e.target.name]: e.target.value,
      },
    });
    this.toggleButton();
  };
  toggleButton() {
    this.setState((state) => {
      return {
        buttonIsActive:
          state.newTableItem.name &&
          state.newTableItem.surename &&
          state.newTableItem.phone
            ? false
            : true,
      };
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.newTableItem);
    this.resetForm();
    this.props.toggleForm();
  };

  resetForm() {
    this.setState({
      newTableItem: {
        ...this.state.newTableItem,
        name: "",
        surename: "",
        phone: "",
      },
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row justify-content-start">
          <div className="col">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Имя"
              value={this.state.newTableItem.name}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="col">
            <input
              name="surename"
              type="text"
              className="form-control"
              placeholder="Фамилия"
              value={this.state.newTableItem.surename}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="col">
            <input
              name="phone"
              type="number"
              className="form-control"
              placeholder="Телефон"
              value={this.state.newTableItem.phone}
              onChange={this.onChange}
            ></input>
          </div>

          <div className="col-auto flex justify-content-end">
            <button
              disabled={this.state.buttonIsActive}
              type="submit"
              className="btn btn-outline-primary me-2"
            >
              Сохранить
            </button>
            <button onClick={this.props.toggleForm} type="button" className="btn btn-outline-primary">
              Отмена
            </button>
          </div>
        </div>
      </form>
    );
  }
}
