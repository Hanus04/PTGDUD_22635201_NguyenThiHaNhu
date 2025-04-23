import React from 'react';
import BookList from './components/BookList';
import "./App.css"

function App() {
  return (
    <div className="container">
      <h1>Quản lý sách</h1>
      <BookList />
    </div>
  );
}

export default App;
