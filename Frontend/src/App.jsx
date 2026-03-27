import ItemCard from './Components/ItemCard/ItemCard';
import Header from './Shared/Header/Header';
import SearchBar from './Shared/SearchBar/SearchBar';
import './Shared/style/app.scss'

const App = () => {
  return (
    <div className="app">
      <SearchBar/>
      <Header />
      <ItemCard />
    </div>
  );
};

export default App;