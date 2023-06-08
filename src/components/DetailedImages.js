import { Box, Grid, Typography } from '@mui/material'

export default function StandardImageList() {
  return (
    <Box sx={{ bgcolor: 'black', py: 3 }}>
      <Grid container>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={6} lg={3}>
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
                <Typography variant='h5' fontWeight={'bold'} color='white'>
                  {item.title}
                </Typography>
                <Typography component={'p'}>{item.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1615195024451-b912727e0b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VkYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    title: 'who we are',
    description:
      'Read our story, meet our team, see our board, review our finances',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1608317544280-9e9916b8c54d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1ZGFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    title: 'what we do',
    description:
      'Read our story, meet our team, see our board, review our finances,',
    author: '@rollelflex_graphy726',
  },
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
