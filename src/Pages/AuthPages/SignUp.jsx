import React from 'react';
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { AuthCardBg, BgBlur, BlueBg } from '../../assets/Bg';
import Slider from 'react-slick';
import {Logo} from '../../commonComponents';
import { AutoTextCarousel, SignUpCard } from '../../components';
const NextArrow = () => null;
const PrevArrow = () => null;
const SignUp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  // 3 seconds per slide
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
  };

  return (
    <Box sx={{
      backgroundImage: `url(${BlueBg})`,
      backgroundSize: "cover",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Paper
        component="main"
        sx={{
          backgroundColor: '#FFFFFF',
          height: { xs: '65vh', md: '75vh' },
          width: { xs: '60vw', md: '65vw' },
          borderRadius: { xs: '8px', md: '16px' },
          p: 2,
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ height: "100%", borderRadius: '20px', overflow: 'hidden' }}>
          <Box height="100%" width="100%" m={2}>
            <Box sx={{ display: 'flex' }}>
              <Logo />
            </Box>
            <Box width={'100%'} height={'90%'} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SignUpCard/>
            </Box>
          </Box>
          <Box
            height="100%"
            width="50%"
            sx={{
              backgroundImage: `url(${AuthCardBg})`,
              backgroundSize: "cover",
              borderRadius: '8px',
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
              <AutoTextCarousel/>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SignUp;
