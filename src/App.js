import React from 'react';
import './style.css';
import SearchItems from './SearchItems.js';
export default function App() {
  const itemList = ['apple', 'kiwi', 'mango', 'peachmango', 'peach', 'banana'];
  return <SearchItems itemList={itemList} />;
}
