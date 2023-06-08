import { Box, Button, Container, Grid, Typography } from '@mui/material'

export default function JoinUs() {
  return (
    <Box>
      <Container marginX='auto' maxWidth='xl' sx={{ marginY: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1}>
              {itemData.map((item) => (
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      width: {
                        xs: '100%',
                        sm: '100%',
                        md: '100%',
                        lg: '100%',
                      },
                      height: '300px',
                      m: 'auto',
                      color: 'white',

                      borderRadius: 3,
                    }}
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      opacity: '1',
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                    >
                      <Typography
                        variant='h5'
                        fontWeight={'bold'}
                        color='white'
                      >
                        {item.title}
                      </Typography>
                      <Typography component={'p'}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <Box>
                  <Typography variant='h4' fontWeight={'bold'}>
                    JOIN US
                  </Typography>
                  <Typography component={'p'} my={2}>
                    There are lots of ways to support Every Village's work in
                    South Sudan. Sign up for Monthly Matters, go on a trip,
                    volunteer at an event, or like our Facebook page. <br />{' '}
                    <br />
                    Learn more about ways to get involved here:
                  </Typography>
                  <Button
                    sx={{ borderRadius: 5 }}
                    size='large'
                    variant='outlined'
                    color='primary'
                  >
                    join us
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1629195620204-b2772d0181d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VkYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    title: 'where we work',
    description:
      'Read our story, meet our team, see our board, review our finances,',
    author: '@helloimnik',
  },

  {
    img: 'https://media.istockphoto.com/id/1030947618/photo/sudanese-woman.jpg?s=612x612&w=0&k=20&c=95bTwAZE5D50WgeKR6SiqtTHYsFk6j2Z0QGlGxPOJkA=',
    title: 'join us',
    description:
      'Read our story, meet our team, see our board, review our finances,',
    author: '@tjdragotta',
  },
]
