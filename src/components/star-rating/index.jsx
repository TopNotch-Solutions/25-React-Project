import { FaStar } from "react-icons/fa";
import './style.css';
import { useState } from "react";

function StarRating({numberOfStar}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex){
        setRating(currentIndex);
        console.log(currentIndex);
    }

    function handleMouseEnter(currentIndex){
        setHover(currentIndex)
        console.log(currentIndex);
    }
    function handlMouseLeave(currentIndex){
        setHover(rating);
        console.log(currentIndex);
    }

  return (
    <div className="star-rating">
        {
            [...Array(numberOfStar)].map((_, index) =>{
                index += 1;
                return (
                    <FaStar 
                    key={index}
                    className={index <= (rating || hover) ? "active" : "inactive"}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseMove={() =>handlMouseLeave(index)}
                    size={30}
                    />
                )
            })
        }
    </div>
  );
}

export default StarRating;
