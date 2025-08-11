import React from 'react';
import ProductList from './components/ProductList';
import './styles/App.css';

export default function App(){
  return (
    <div className="app">
      <header className="app-header">
        <h1 className='title'>E-Commerce Site</h1>
        <p className="subtitle"></p>
      </header>
      <main>
        <ProductList></ProductList>
      </main>
      <footer className="app-footer">Made By: Moustafa Ali</footer>
    </div>
  );
}
