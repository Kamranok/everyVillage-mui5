import { Box, Container, Grid, Typography } from '@mui/material'

export default function ContactUs() {
  return (
    <>
      <Box sx={{ backgroundColor: '#161616' }}>
        <Container maxWidth='md'>
          <Grid py={10} container columnSpacing={6} rowSpacing={3}>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography color='white' variant='h6' component={'h6'}>
                  WHY SOUTH SUDAN?
                </Typography>
                <Typography py={3} color='#5e5e5e' variant='body1'>
                  With South Sudan as the world's newest country, we have the
                  unique opportunity to build a nation for Christ.
                </Typography>
                <Typography color='white' variant='body1'>
                  We do this by partnering with the people of South Sudan to
                  provide every village with sustainable access to safe water,
                  healthy churches, and the gospel by radio.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography color='white' variant='h6' component={'h6'}>
                  GIVE
                </Typography>
                <Typography
                  py={3}
                  color='#a09e9e'
                  variant='body1'
                  lineHeight={2}
                >
                  to Monthly Matters
                  <br />
                  to Water
                  <br />
                  to Radio
                  <br />
                  to Where Needed Most
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography color='white' variant='h6' component={'h6'}>
                  CONTACT US
                </Typography>
                <Typography py={3} color='#a09e9e' variant='body1'>
                  2600 Gessner Rd, Suite 282
                  <br />
                  Houston, TX 77080
                  <br />
                  713.414.5490
                </Typography>
                <Typography variant='body1' color='primary'>
                  everyvillage.org
                </Typography>
                <Typography variant='body1' color='primary'>
                  contact us
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
