import React, { useState } from "react";

const List = ({ contacts }) => {
  const [filter, setFilter] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filter.toLowerCase());
    });
  });

  console.log("filtered", filtered)
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullName}</span>
            <span>{contact.phoneNumber}</span>
            </li>
        ))}
      </ul>

      <p>
        {filtered.length} kayıt bulunmaktadır.
      </p>
    </div>
  );
};

export default List;
