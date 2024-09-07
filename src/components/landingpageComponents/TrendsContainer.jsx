import React from 'react';
import { Container, Grid2, Typography, Button, Paper, Box } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import customer from '../../assets/imageFiles/customer support.png';
import AI from '../../assets/imageFiles/AI.png';
import cyber from '../../assets/imageFiles/cyber security.png';
import bg2 from '../../assets/imageFiles/bg2.png'


// Data
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
  return (
    <Container
    maxWidth={false}

      sx={{
        position:'relative',
        width: {xs:'100%',xl:'100%'},
        
        height: 'auto',
        mt: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
        zIndex:'1'
      }}
    >

      {/* bg png */}
      <Box
        component="img"
        src={bg2}
        sx={{
          position: 'absolute',
          width: '100%', // Adjust size as needed
          height: '200%', // Adjust size as needed
          top: 0,
          left: 0,
          zIndex: '-1',
          transform: 'rotate( 180deg)',  // Rotate the image by 45 degrees
          // transformOrigin: 'center', // Rotate around the center
          objectFit: 'cover ',
        }}
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
            fontWeight: 400,
            fontSize: {
              xs: '28px',
              sm: '32px',
              md: '40px',
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
              xs: '16px',
              sm: '18px',
              md: '18px',
            },
            lineHeight: '1.5',
            color: '#ADADAD',
            textAlign: 'center'

          }}
        >
          Stay updated with how emerging technologies are shaping the future of business.
        </Typography>
      </div>

      {/* Second Container */}
      <Grid2 container spacing={2} sx={{ justifyContent: { xs: 'center', sm: 'start', md: 'center' }, width: { xs: '100%', xl: '1200px' } }}>
  {trends.map((trend, index) => (
    <Grid2 item xs={12} sm={6} md={4} key={index}>
      <Paper sx={{ width: '100%', maxWidth: { xs: '330px', sm: '350px', lg: '370px', xl: '378.67px' }, height: { xs: 'auto', md: '553px', lg: '553px' }, borderRadius: '16px', border: '0.2px solid #707070', p: '24px 16px', display: 'flex', flexDirection: 'column', backgroundColor: '#101010', color: 'white', gap: '6px' }} elevation={3}>
        <img src={trend.img} alt={trend.text} style={{ width: '100%', height: 'auto', maxHeight: '211.49px', borderRadius: '8px', objectFit: 'cover' }} />
        <Box sx={{ height: '26px', width: 'fit-content', borderRadius: '4px', marginY: '8px', display: 'flex', alignItems: 'center', border: trend.button.border }}>
          <Button sx={{ color: trend.button.color, fontSize: '12px', lineHeight: '18px', fontWeight: 400, fontFamily: 'inter' }}>
            {trend.button.title}
          </Button>
        </Box>
        <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: { xs: '16px', sm: '18px', md: '20px', xl: '22px' }, lineHeight: '1.5' }}>
          {trend.text}
        </Typography>
        <Typography sx={{ fontSize: { xs: '14px', sm: '14px', md: '16px' }, lineHeight: '1.5', color: '#ADADAD', fontFamily: 'inter' }}>
          {trend.desc}
        </Typography>
        <Button endIcon={<EastIcon />} sx={{ color: '#117DCC', width: 'fit-content', height: '32px', mt: '8px', marginX: '-7px', fontWeight: 'bold', fontFamily: 'poppins', fontSize: { xs: '12px', sm: '14px', md: '16px', xl: '18px' } }}>
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
