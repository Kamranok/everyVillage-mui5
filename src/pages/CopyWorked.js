import { Box, Button, Container, Stack, Typography } from '@mui/material'
import CountryDetails from '../components/CountryDetails'
import PrimarySearchAppBar from '../components/Navbar'
import Mission from '../components/Mission'
import StandardImageList from '../components/DetailedImages'
import JoinUs from '../components/JoinUs'
import OptionsCards from '../components/OptionsCards'

const imgSudan =
  'https://www.unicef.org/sites/default/files/styles/hero_desktop/public/UN0202141_0.jpg?itok=lOmB0bHH'

export const Home = () => {
  return (
    <>
      <Box
        sx={{ bgcolor: 'lightGray', minHeight: '65vh' }}
        style={{
          backgroundImage: `url(${imgSudan})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '1',
        }}
      >
        <PrimarySearchAppBar />
        <Container
          maxWidth='md'
          sx={{
            pt: {
              xs: 0,
              sm: 20,
              lg: 20,
            },
          }}
        >
          <Stack spacing={2} justifyContent='center' alignItems='center'>
            <Typography
              textAlign={'center'}
              variant='h3'
              component={'h3'}
              color='white'
              sx={{
                fontSize: { xs: '2.5rem' },
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
                  'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              }}
            >
              building a nation for Christ
            </Typography>
            <Box sx={{ maxWidth: '500px', textAlign: 'center' }}>
              <Typography
                my={5}
                color='white'
                variant='body1'
                fontWeight='bold'
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
                    'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                  my: {
                    xs: 2,
                  },
                }}
              >
                We partner with the people of South Sudan to provide every
                village with sustainable access to safe water, healthy churches,
                and the gospel by radio.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent='space-around'
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
      {/* <OptionsCards /> */}
      <CountryDetails />
      <Mission />
      <StandardImageList />
      <JoinUs />
    </>
  )
}
