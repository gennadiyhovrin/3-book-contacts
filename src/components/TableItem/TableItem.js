import React, { Component } from "react";

export default class TableItem extends Component {
    onDeleteBtnClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.item.id);
    };
  render() {
    const {item} = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.surename}</td>
        <td>{item.phone}</td>
        <th scope="row">
          <button
            onClick={this.onDeleteBtnClick}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </th>
      </tr>
    );
  }
}
