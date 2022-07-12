import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Counter />
      <Message /> 
      <Greet name="Bruce" heroName="Batman">
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
