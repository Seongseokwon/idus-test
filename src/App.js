import './Reset.css';
import './App.css';
import Card from './components/Card';

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
      <div>
        <Card
          position={'horizontal'}
          star={3}
          review={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
          writer={'John Doe'}
        />
      </div>
    </div>
  );
}

export default App;
