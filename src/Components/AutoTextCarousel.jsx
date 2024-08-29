import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { BgBlur } from '../assets';
  // Ensure you import or define BgBlur

const AutoTextCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  // 3 seconds per slide
        // Hide the previous arrow
  };

  return (
    <Box sx={{ width: '100px', height: '100px' }}>
      <Slider {...settings}>
        {[ 'Slide 1', 'Slide 2', 'Slide 3' ].map((slide, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${BgBlur})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',  // Ensure text color contrasts well with the background
              textAlign: 'center',
              padding: 2,
            }}
          >
            <Typography variant="h6">
              {slide}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AutoTextCarousel;
