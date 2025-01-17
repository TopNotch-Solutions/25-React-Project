import './App.css';
import Accordian from './components/accordian';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColorGenerator /> */}
      <StarRating numberOfStar={5}/>
    </div>
  );
}

export default App;
