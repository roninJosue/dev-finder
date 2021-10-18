import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

function App() {
  return (
    <main className='App-header'>
      <section className='dev'>
        <Header />
        <Search />
        <User />
      </section>
    </main>
  );
}

export default App;
