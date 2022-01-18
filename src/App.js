import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import Header from './components/header';
import './App.css';

const temporaryProp = [
  { id: 1, title: 'I need API. I am ready for data.' },
  { id: 2, title: 'I need API. I am ready for data.' },
];

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books books={temporaryProp} />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
