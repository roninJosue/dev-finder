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
  const value = useMemo(() => ({user, setUser}), [user, setUser])
  return (
    <DevFinderProvider value={value}>
      <main className='App-header'>
        <section className='dev'>
          <Header />
          <Search />
          {(user && Object.keys(user).length)
            ? (<User />)
            : (
              <UserNotFound
                user={user}
              />
            )
          }
        </section>
      </main>
    </DevFinderProvider>
  );
}

export default App;
