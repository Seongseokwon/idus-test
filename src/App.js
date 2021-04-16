import './Reset.css';
import './App.css';
import Card from './components/card/Card';
import Input from './components/input/Input';

function App() {
  return (
    <div>
      <div className="button-section" style={{ display: 'flex' }}>
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
      <br />

      <div
        className="input-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
          justifyContent: 'space-around',
        }}
      >
        <Input baseText={'초기값이 있을수 있습니다.'} maxLength={300} />
        <Input baseText={'읽기 전용 상태 입니다'} read={'read-only'} />
        <Input baseText={'주문 요청사항을 입력해주세요'} disable={'disabled'} />
      </div>
    </div>
  );
}

export default App;
