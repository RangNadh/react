import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Message /> 
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is a children props</p>
      </Greet>
      <Greet name='Clark' heroName="Superman"/> 
      <Greet name='Diana' heroName="Wonder Women"/>
      <Welcome name="Bruce" heroName="Batman"></Welcome> 
      <Hello /> */}
    </div>
  );
}

export default App;
