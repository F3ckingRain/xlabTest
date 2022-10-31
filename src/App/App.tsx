import React from 'react';
import TitleBar from "../UIkit/TitleBar/TitleBar";
import {IUser} from "../Types/User";
import MenuContainer from "../Containers/MenuContainer/MenuContainer";
import menuItems from "../Const/MenuItems";
import './App.scss'
import AppRouter from "../Router/AppRouter";

function App() {
    const user:IUser = {
        firstName: 'Имя',
        secondName: 'Фамилия'
    }
  return (
    <div className="App">
      <TitleBar user={user}/>
        <div className={'page__app'}>
            <MenuContainer items={menuItems}/>
            <AppRouter/>
        </div>
    </div>
  );
}

export default App;
