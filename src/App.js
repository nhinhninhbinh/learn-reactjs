import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';

function App() {
  const name = 'nhinh'
  const isFemale = true
  const student = {
    name: 'ssss'
  }
  const arr = ['red', 'blinlk', 'blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nhinhdt learn reactjs
        </p>
        {/* Khong hien thi len man hinh, nen phai render theo dieu kien */}
        <p>Xin chao {name} - {isFemale} {null} {undefined}</p>
        <p>Xin chao {name} - {isFemale ? 'Male' : "Female"} {null} {undefined}</p>

        {/* truong hop code ngan gon  */}
        {isFemale ? <p>Male</p> : <p>Female</p>}
        {/* truowng hop jsx dai thi code duoi se de theo doi, code tach biet */}
        {isFemale && <p>Male</p>}
        {!isFemale && <p>Female</p>}

        {/* Muon render nhieu dong thi dung (), 
        copy clone nhieu dong => dung Alt + Shift + Dow (Up), 
        Click File > Preferences > Keyboard Shortcuts > 
        Search for copyLinesDownAction or copyLinesUpAction in your keyboard shortcuts */}
        {isFemale && (
          <div>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </div>
        )}

        {/* case k muon render tag div, chi render tag p => Dung Fragment or <>  */}
        {isFemale && (
          <React.Fragment>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </React.Fragment>
        )}

        <p>{student.name}</p>
        <ul>
          {arr.map(color => (
            <li key={color}>{color}</li>
          ))}
        </ul>

         <TodoFeature/>   


      </header>
    </div>
  );
}

export default App;
