import React from "react";

const ListGroup = (props) => {
  const { item, onItemSelect, textProperty, valueProperty, selectItem } = props;
  return (
    <ul className="list-group">
      {item.map((g) => (
        <li
          onClick={() => onItemSelect(g)}
          key={g[valueProperty]}
          className={
            g === selectItem ? "list-group-item active" : "list-group-item"
          }
        >
          {g[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
