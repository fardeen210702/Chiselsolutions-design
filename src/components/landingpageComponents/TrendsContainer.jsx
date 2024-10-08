import React, {useEffect}  from 'react';
import { Container, Grid2, Typography, Button, Paper, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import customer from '../../assets/imageFiles/customer support.png';
import AI from '../../assets/imageFiles/AI.png';
import cyber from '../../assets/imageFiles/cyber security.png';
import bg2 from '../../assets/imageFiles/bg2.png'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';



const trends = [
  {
    button: {
      color: '#624200',
      title: 'Customer Support',
      border: '0.2px solid #564519',
    },
    text: '5 Ways AI is Revolutionizing Customer Support',
    desc: 'Explore how AI-driven technologies are transforming customer support, from chatbots to predictive analytics, and learn how businesses are leveraging these tools',
    btn2: 'Read More',
    img: customer,
  },
  {
    button: {
      color: '#8f7120',
      title: 'AI Future',
      border: '0.2px solid #564519',
    },
    text: 'The Future of Business: AI-Powered Process Automation',
    desc: 'Discover how AI-powered automation is reshaping industries by streamlining operations, reducing costs, and enabling businesses to focus on innovation and growth.',
    btn2: 'Read More',
    img: AI,
  },
  {
    button: {
      color: '#7b1d92',
      title: 'Cyber Security',
      border: '0.2px solid #4B035D',
    },
    text: 'The Role of AI in Cybersecurity: Safeguarding Your Business',
    desc: 'Explore how AI is being used to detect threats, prevent cyberattacks, and protect sensitive data leakage, making businesses more secure in the digital age.',
    btn2: 'Read More',
    img: cyber,
  },
];

const TrendsContainer = () => {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.trendscontainer',
            start: '30% bottom',
        }
    })

    tl.fromTo('.gird-container ', { y: 100, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out'
    })

}, [])


  return (
    <Container
    maxWidth={false}
    className='trendscontainer' >

      {/* bg png */}
      <Box
        component="img"
        className='bg-img'
        src={bg2}
      />
      {/* First Container */}
      <div
        sx={{
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontWeight: 600,
            fontSize: {
              xs: '28px',
              sm: '32px',
            },
            lineHeight: '1.2',
            letterSpacing: '1.6px',
            color: '#117DCC',
            mb: '10px',
            textAlign: 'center'
          }}
        >
          Explore the Latest Trends
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: {
              xs: '14px',
              sm: '16px',
            },
            lineHeight: 1.5,
            color: '#ADADAD',
            textAlign: 'center'
          }}
        >
          Stay updated with how emerging technologies are shaping the future of business.
        </Typography>
      </div>

      {/* Second Container */}
      <Grid2 className='gird-container' container spacing={2} sx={{ justifyContent: { xs: 'center', sm: 'start', md: 'center' }, width: { xs: '100%', xl: '1200px' } }}>

  {trends.map((trend, index) => (
    <Grid2 item xs={12} sm={6} md={4} key={index}>
      <Paper
      // unable to add external css to paper,chip,button
      sx={{ width: '100%', maxWidth: { xs: '330px', sm: '350px', lg: '370px', xl: '378.67px' }, height: { xs: 'auto', md: '553px', lg: '553px' }, borderRadius: '16px', border: '0.2px solid #2b2b2b', p: '24px 16px', display: 'flex', flexDirection: 'column', backgroundColor: '#101010', color: 'white', gap: '6px',justifyContent:'space-between' }} elevation={3}>
        <img src={trend.img} alt={trend.text} style={{ width: '100%', height: 'auto', maxHeight: '211.49px', borderRadius: '8px', objectFit: 'cover' }} />

        <Box sx={{ height: '26px', width: 'fit-content', borderRadius: '4px', marginY: '8px', display: 'flex', alignItems: 'center', border: trend.button.border }}>
          <Button sx={{ color: trend.button.color, fontSize: '12px', lineHeight: '18px', fontWeight: 400, fontFamily: 'inter' }}>
            {trend.button.title}
          </Button>
        </Box>

        <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: { xs: '16px', sm: '18px', md: '18px' }, lineHeight: '1.5' }}>
          {trend.text}
        </Typography>
        <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, lineHeight: '1.5', color: '#ADADAD', fontFamily: 'inter' }}>
          {trend.desc}
        </Typography>
        <Button endIcon={<EastIcon />} sx={{ color: '#117DCC', width: 'fit-content', height: '32px', mt: '8px', marginX: '-7px', fontWeight: 500,textTransform:'capitalize', fontFamily: 'poppins', fontSize: { xs: '12px', sm: '14px', md: '16px', xl: '18px' } }}>
          {trend.btn2}
        </Button>
      </Paper>
    </Grid2>
  ))}
</Grid2>

    </Container>
  );
};

export default TrendsContainer;
