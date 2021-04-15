import './Reset.css';
import './App.css';
import Card from './components/card/Card';

function App() {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Card
          position={'vertical'}
          star={2}
          review={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        />
        <Card position={'vertical'} star={4} />
        <Card position={'vertical'} />
      </div>
      <br />
      <Card position={'horizontal'} star={3} writer={'John Doe'} />
    </div>
  );
}

export default App;
