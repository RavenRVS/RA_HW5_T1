import './App.css';
import CardList from './components/CardList/CardList';
import cards from './components/data/cards';

function App() {
  return (
    <>
      <CardList id="cards" items={cards}/>
    </>
  );
}

export default App;