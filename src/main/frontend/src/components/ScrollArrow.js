import React, {useState} from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import './ScrollArrow.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 50){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 50){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <ArrowCircleUpIcon style={{display: showScroll ? 'flex' : 'none'}} sx={{fontSize: '2.5rem'}} className="scrollTop" onClick={scrollTop} />
  );
}

export default ScrollArrow;