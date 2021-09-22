import React from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <main className='App-header'>
      <section className='dev'>
        <Header />
        <Search />
        <UserInfo />
      </section>
    </main>
  );
}

export default App;
