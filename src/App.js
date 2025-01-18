import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      <Accordian />
      {/* <RandomColorGenerator /> */}
      {/* <StarRating numberOfStar={5}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"} />
    </div>
  );
}

export default App;
