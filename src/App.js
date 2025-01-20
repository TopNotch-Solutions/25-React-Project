import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating numberOfStar={5}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"} /> */}
        {/* <LoadMoreData /> */}
        {/* <TreeView menu={menus}/> */}
        {/* <QRCodeGenerator /> */}
        <LightDarkMode />
    </div>
  );
}

export default App;
