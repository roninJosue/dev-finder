import React,{useMemo} from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";
import {DevFinderProvider} from "./context/context";
import useApp from "./hooks/useApp";
import UserNotFound from "./components/User/components/UserNotFound";

function App() {
  const {user, setUser} = useApp()
  const value = useMemo(() => ({user, setUser}), [user])
  return (
    <DevFinderProvider value={value}>
      <main className='App-header'>
        <section className='dev'>
          <Header />
          <Search />
          {user
            ? (<User />)
            : (<UserNotFound />)
          }
        </section>
      </main>
    </DevFinderProvider>
  );
}

export default App;
