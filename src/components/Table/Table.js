import { Component } from "react";
import TableItem from "../TableItem/TableItem";
export default class Table extends Component {
  render() {
    const { tableItem, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Телефон</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tableItem.map((item) => {
            return <TableItem key={item.id} item={item} onDelete={onDelete}/>;
          })}
        </tbody>
      </table>
    );
  }
}
