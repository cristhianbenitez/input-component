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

            <Input className="hover-default" />
          </div>
          <div className="input-container">
            <p className="grey-text">{'&:focus'}</p>

            <Input className="focus-default" />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input error />'}</p>

            <Input error />
          </div>
          <div className="input-container">
            <p className="grey-text">{'&:hover'}</p>

            <Input error className="active-error" />
          </div>
          <div className="input-container">
            <p className="grey-text">{'&:focus'}</p>

            <Input error />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input disabled />'}</p>

            <Input disabled />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">
              {'<Input helperText="someInterestingText" />'}
            </p>

            <Input helperText="Some Interesting Text" />
          </div>
          <div className="input-container">
            <p className="regular-text">
              {'<Input helperText="someInterestingText" />'}
            </p>

            <Input helperText="Some Interesting Text" error />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input size="sm" />'}</p>

            <Input startIcon="phone" />
          </div>
          <div className="input-container">
            <p className="regular-text">{'<Input size="md" />'}</p>

            <Input endIcon="lock" />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input value="text" />'}</p>

            <Input value="text" />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input size="sm" />'}</p>

            <Input size="sm" />
          </div>
          <div className="input-container">
            <p className="regular-text">{'<Input size="md" />'}</p>

            <Input size="md" />
          </div>
        </div>
        <div className="row wide-lg">
          <div className="input-container">
            <p className="regular-text">{'<Input size="sm" />'}</p>

            <Input fullWidth />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <p className="regular-text">{'<Input size="sm" />'}</p>
            <Input multiline rows="4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
