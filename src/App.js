import './App.css';
import Input from './Components/Input/Input';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Inputs</h1>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input />'}</p>

            <Input />
          </div>
          <div className="input-container">
            <p className="grey-text">{'&:hover'}</p>

            <Input />
          </div>
          <div className="input-container">
            <p className="grey-text">{'&:focus'}</p>

            <Input />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input error />'}</p>

            <Input error />
          </div>
          <div className="input-container">
            <p className="grey-text">{'&:hover'}</p>

            <Input />
          </div>
          <div className="input-container">
            <p className="grey-text">{'&:focus'}</p>

            <Input error />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
