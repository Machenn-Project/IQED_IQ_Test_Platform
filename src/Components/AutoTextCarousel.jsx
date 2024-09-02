import React from 'react';
import Slider from 'react-slick';
import {BgBlur} from '../assets/Bg';
import { Box, Typography } from '@mui/material';
const AutoTextCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  
  };

  return (
    <Slider {...settings} style={{ width: '80%', height: '80%' }} arrows={false} >
    <Box sx={{
      backgroundImage: `url(${BgBlur})`,
      backgroundSize: "cover",
      width: '100%',
      height: '60vh',
      borderRadius: '8px',
    }}>
      <Typography variant="h6" sx={{
        color: '#fff', textAlign: 'left', height: '100%', width: '100%', display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '38px',
        fontWeight: 'bold'

      }}>
        Overcome Math <br />Anxiety and Boost <br />Your Memory.
      </Typography>
    </Box>
    <Box sx={{
      backgroundImage: `url(${BgBlur})`,
      backgroundSize: "cover",
      width: '100%',
      height: '60vh',
      borderRadius: '8px',

    }}>
      <Typography variant="h6" sx={{
        color: '#fff', textAlign: 'left', height: '100%', width: '100%', display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '38px',
        fontWeight: 'bold', p: 2
      }}>
        Embrace math challenges <br />as opportunities to grow.
      </Typography>
    </Box>
    <Box sx={{
      backgroundImage: `url(${BgBlur})`,
      backgroundSize: "cover",
      width: '100%%',
      height: '60vh',
      borderRadius: '8px',

    }}>
      <Typography variant="h6"
        sx={{
          color: '#fff', textAlign: 'left', height: '100%', width: '100%', display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '38px',
          fontWeight: 'bold', p: 2
        }}>
        A sharp mind holds the key to <br />unlocking your memory's <br />full potential.
      </Typography>
    </Box>
  </Slider>
  );
};

export default AutoTextCarousel;
