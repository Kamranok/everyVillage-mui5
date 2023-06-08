import { Box, Button, Container, Stack, Typography } from '@mui/material'
import CountryDetails from '../components/CountryDetails'
import PrimarySearchAppBar from '../components/Navbar'
import Mission from '../components/Mission'
import StandardImageList from '../components/DetailedImages'
import JoinUs from '../components/JoinUs'
import OptionsCards from '../components/OptionsCards'
import ContactUs from '../components/ContactUs'
import BuildNation from '../components/BuildNation'
import Footer from '../components/Footer'

const imgSudan =
  'https://www.unicef.org/sites/default/files/styles/hero_desktop/public/UN0202141_0.jpg?itok=lOmB0bHH'

const Home = () => {
  return (
    <>
      <Box
        sx={{ minHeight: '65vh' }}
        style={{
          backgroundImage: `url(${imgSudan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '1',
        }}
      >
        <PrimarySearchAppBar />
        <Container maxWidth='md'>
          <Stack justifyContent='center' alignItems='center' minHeight='65vh'>
            <Box>
              <Typography
                textAlign={'center'}
                color='white'
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
                    'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                }}
              >
                building a nation for Christ
              </Typography>
              <Typography
                mx={'auto'}
                my={{ xs: 2 }}
                color='white'
                variant='body1'
                fontWeight='bold'
                textAlign={'center'}
                maxWidth={'sm'}
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
                    'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                }}
              >
                We partner with the people of South Sudan to provide every
                village with sustainable access to safe water, healthy churches,
                and the gospel by radio.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent='center'
              >
                <Button
                  sx={{ borderRadius: 5 }}
                  size='large'
                  variant='contained'
                  color='primary'
                >
                  monthly matters
                </Button>
                <Button
                  sx={{ borderRadius: 5 }}
                  size='large'
                  variant='contained'
                  color='primary'
                >
                  every details
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
      <OptionsCards />
      <CountryDetails />
      <Mission />
      <StandardImageList />
      <JoinUs />
      <BuildNation />
      <ContactUs />
      <Footer />
    </>
  )
}
export default Home
