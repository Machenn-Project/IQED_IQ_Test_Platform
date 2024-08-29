import React from 'react';
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { AuthCardBg, BgBlur, BlueBg } from '../../assets';
import Slider from 'react-slick';

import IQEDLogo from '../../Components/Logo';
// import SignUpCard from '../../Components/SignUpCard';
import SignUpCard from '../../Components/SignUpCard';
const NextArrow = () => null;
const PrevArrow = () => null;
const SignIn = () => {
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
          height: { xs: '50vh', md: '75vh' },
          width: { xs: '60vw', md: '65vw' },
          borderRadius: { xs: '8px', md: '16px' },
          p: 2,
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ height: "100%", borderRadius: '20px', overflow: 'hidden' }}>
          <Box height="100%" width="100%" m={2}>
            <Box sx={{ display: 'flex' }}>
              <IQEDLogo />
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
            <Slider {...settings} style={{ width: '80%', height: '80%' }}>
              <Box sx={{
                backgroundImage: `url(${BgBlur})`,
                backgroundSize: "cover",
                width: '100%',
                height: '60vh',
                borderRadius: '8px',

              }}>
                <Typography variant="h6"  sx={{
                  color: '#fff', textAlign: 'left', height: '100%', width:'100%', display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize:'38px',
                  fontWeight:'bold'
                 
                }}>
                  Overcome Math <br/>Anxiety and Boost <br/>Your Memory.
                </Typography>
              </Box>
              <Box sx={{
                backgroundImage: `url(${BgBlur})`,
                backgroundSize: "cover",
                width: '100%',
                height: '60vh',
                borderRadius: '8px',

              }}>
                <Typography variant="h6"  sx={{
                  color: '#fff', textAlign: 'left', height: '100%', width:'100%', display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize:'38px',
                  fontWeight:'bold',p:2
                }}>
                 Embrace math challenges <br/>as opportunities to grow.
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
                  color: '#fff', textAlign: 'left', height: '100%', width:'100%',display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize:'38px',
                  fontWeight:'bold',p:2
                }}>
                 A sharp mind holds the key to <br/>unlocking your memory's <br/>full potential.
                </Typography>
              </Box>
            </Slider>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SignIn;
