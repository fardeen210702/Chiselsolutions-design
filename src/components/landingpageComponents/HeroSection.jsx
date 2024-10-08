import React, { useEffect, useLayoutEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Frame from '../../assets/imageFiles/Frame24.png';
import aiimage from '../../assets/imageFiles/aiimage.png';
import vector from '../../assets/imageFiles/Vector1.png';
import gsap from 'gsap';

const HeroSection = () => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.container-wrapper', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  
   
  }, [])
  




  return (
    <Container  className="container-wrapper"
      maxWidth={false}
      sx={{ paddingTop: { xs: '80px', lg: '300px' }, height: { xs: '100vh',md:'130vh', lg: '750px' } }}
    >
      <Box className="box-styled" >
        <Box component={'img'} sx={{ width: 24, height: 24 }} src={aiimage} alt="placeholder" />
        <Typography className="typography-styled" sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px'}}>
          Crafting AI Excellence
        </Typography>
      </Box>

      <Box>
        <Typography className="typography-header"
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold',  fontSize: { xs:'32px',md:'36px',lg:'40px' }, fontFamily: 'inter',marginBottom:'20px' }}
        >
          Accelerate Innovation and Optimize Your Business<br />
          with Tailored AI Solutions
          <Box component={'img'} src={vector} sx={{ width: { xs: '15px', md: '18px', lg: '26px' }, position: 'absolute', right: { lg: '207px' },bottom:{xs:'auto',md:'23px'} }} />
        </Typography>

        <Typography className='typography-body'
          variant="body1"
          component="p"
          sx={{ lineHeight: 1.5, fontSize: { xs: '14px', sm: '16px',fontWeight:500,fontFamily:'inter' } }}
        >
          Unlock the future with AI solutions tailored to your needs. Enhance efficiency, drive innovation, and position <br /> your business for sustained success.
        </Typography>
      </Box>

      <Button className='button-outlined'
        variant="outlined"
        color="secondary"  //unable to apply external css to this button
        sx={{ background: 'rgba(255, 255, 255, 0.04)', color: '#117DCC', marginTop: '48px', gap: '12px', padding: '15px', textTransform: 'capitalize', fontWeight: 'bolder', fontSize: { xl: '18px' },borderRadius:'var(--Space-8, 8px)',border:'0.2px solid  #444444' }}
      >
        Let's Get Started <EastIcon />
      </Button>

      <Box component='img' src={Frame} className='component-img' />
    </Container>
  );
}

export default HeroSection;
