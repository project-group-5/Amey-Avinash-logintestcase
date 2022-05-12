import logo from './logo.svg';
import './App.css';
import MyComponent from './mysampleinfo';
import ErrorBoundry from './errmsg';
function App() {
  return (
    <div className="App">
      <ErrorBoundry>
     <MyComponent/>
     </ErrorBoundry>
    </div>
  );
}

export default App;
