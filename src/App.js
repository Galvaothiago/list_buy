import { Header } from './components/Header'
import './App.css'
import { ButtonSection } from './components/ButtonSection'
import  Verify  from './components/Verify'
import { Input } from './components/Input'

import { Switch, Route } from "react-router-dom";
import { InputValueProvider } from './components/context/InputValueContext'
import { Login } from './components/Login'
import { useContext } from 'react'
import { AuthContext } from './components/context/AuthContext'
import { PopupProvider } from './components/context/PopupContext'

function App() {
  const { user } = useContext(AuthContext)
  
  return (
    !user ? <Login /> : (
      <div className="containerApp">
      <Header />

      <div className="containerDashboard">
        <InputValueProvider>
          <PopupProvider>
            <ButtonSection />
            <div className="containerMain">
              <Switch>
                <Route path="/Verify">
                  <Verify />
                </Route>
                <Route path="/AddNewList">
                  <Input />
                </Route>
              </Switch>
            </div>
          </PopupProvider>
        </InputValueProvider>
      </div>
    </div>
    )
  );
}

export default App;
