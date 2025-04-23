// src/components/BookItem.jsx
import React from 'react';

function BookItem({ book, onDelete }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.year}</td>
      <td className="actions">
        <button onClick={() => onDelete(book.id)}>Xoá</button>
      </td>
    </tr>
  );
}

export default BookItem;
