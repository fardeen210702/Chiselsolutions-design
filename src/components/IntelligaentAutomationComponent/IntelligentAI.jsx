import { Container, Box, Typography } from '@mui/material'
import iat3 from '../../assets/imageFiles/iat3.png'
import React from 'react'
import s6 from '../../assets/imageFiles/s6.png'

const IntelligentAI = () => {

    const arr = [
        { title: 'Technology Selection :', description: 'Carefully choose the right AI tools to fit your specific requirements' },
        { title: 'Smooth Integration :', description: 'Integrate AI solutions seamlessly into your existing workflows' },
        { title: 'Data Management :', description: 'Ensure secure and compliant data management to support automation' },
    ]
    return (
        <Container maxWidth={false}
            sx={{
                my: '10%', width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', px: '20px', position: 'relative', zIndex: 1, overflow: 'hidden', marginY: {xs:'100px',lg:'240px'}
            }}>

            <Box sx={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between',flexDirection:{xs:'column',md:'row'},gap:{xs:'20px', md:0} }}>

                {/* left container */}
                <Box sx={{ width: { xs: '100%', sm: '80%', md: '520px' }, height: { xs: '300px', sm: '400px', md: '541px' }, padding: '16px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', boxShadow: '0px 0px 0px #FFFFFF inset', borderRadius: '16px', overflow: 'hidden', border: '0.20px solid #707070', display: 'inline-flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    <Box sx={{ alignSelf: 'stretch', flex: '1 1 0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ alignSelf: 'stretch', flex: '1 1 0' }} src={iat3} alt="Placeholder" />
                    </Box>
                </Box>


                {/* rightContainer */}
                <Box sx={{ width: { xs: '100%', sm: '80%', md: '597px' }, height: { xs: 'auto', sm: 'auto', md: '541px' }, padding: '16px',  display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: { xs: '8px', sm: '12px', md: '16px' } }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '400', lineHeight: '51.20px', wordWrap: 'break-word' }}>✨</Typography>
                        <Typography component="span" sx={{ color: '#FFFFFF', fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontFamily: 'Poppins', fontWeight: '700', lineHeight: '51.20px', wordWrap: 'break-word' }}>Seamless AI Technology Integration</Typography>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: '#ADADAD', fontSize: {xs:'16px', lg:'20px'}, fontFamily: 'Inter', fontWeight: '400', lineHeight: '34px', wordWrap: 'break-word' }}>We integrate the most suitable AI tools into your existing systems, ensuring a smooth transition and minimal disruption</Typography>
                    </Box>
                    {arr.map((el, id) => (
                        <Box key={id} sx={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <Box sx={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={s6} alt="Icon" style={{ width: '24px', height: '24px', background: 'linear-gradient(0deg, #101010 0%, #101010 100%), linear-gradient(142deg, #FFFFFF 0%, #FFFFFF 100%)', boxShadow: '4px 0px 9px 2px #BCBCBC4D inset',borderRadius:'50%', border: '0.08px solid' }} />
                            </Box>
                            <Box sx={{ flex: '1 1 0' }}>
                                <Typography sx={{ fontSize: '18px', fontFamily: 'Inter', lineHeight: '27px', wordWrap: 'break-word' }}>
                                    <Typography component="span" sx={{ color: '#FFFFFFE6', fontWeight: '600' }}>{el.title}</Typography>
                                    <Typography component="span" sx={{ color: '#ADADAD', fontWeight: '400' }}>{el.description}</Typography>
                                </Typography>
                            </Box>
                        </Box>)
                    )}
                </Box>



            </Box>


        </Container>
    )
}

export default IntelligentAI
