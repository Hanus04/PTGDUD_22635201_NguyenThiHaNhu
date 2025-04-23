// src/components/BookList.jsx
import React, { useState } from 'react';
import "../css/BookList.css"
function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', genre: 'Tâm lý', year: 1936 },
    { id: 2, title: 'Lập trình JavaScript', author: 'Nguyễn Văn A', genre: 'Công nghệ', year: 2020 },
    { id: 3, title: 'Vũ trụ trong hạt nguyên tử', author: 'Stephen Hawking', genre: 'Khoa học', year: 2001 },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.genre || !newBook.year) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    const newEntry = {
      id: Date.now(),
      ...newBook,
      year: parseInt(newBook.year)
    };

    setBooks([...books, newEntry]);
    setNewBook({ title: '', author: '', genre: '', year: '' });
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredBooks = books
    .filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((book) => (selectedGenre ? book.genre === selectedGenre : true));

  return (
    <div className="container">
      <h1>Quản lý sách</h1>

      <h2>Thêm sách mới</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Tên sách"
          value={newBook.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Tác giả"
          value={newBook.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Thể loại"
          value={newBook.genre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="year"
          placeholder="Năm"
          value={newBook.year}
          onChange={handleChange}
        />
        <button onClick={handleAddBook}>Thêm sách</button>
      </div>

      <h2>Tìm kiếm sách</h2>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên sách"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <h2>Lọc theo thể loại</h2>
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Tất cả thể loại</option>
        <option value="Tâm lý">Tâm lý</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Khoa học">Khoa học</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Thể loại</th>
            <th>Năm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.year}</td>
              <td className="actions">
                <button onClick={() => handleDeleteBook(book.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
