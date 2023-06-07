import { Box, Button, Container, Typography } from '@mui/material'

export default function CountryDetails() {
  return (
    <Box>
      <Container maxWidth='md' sx={{ marginY: 6 }}>
        <Typography
          variant='h2'
          component={'h2'}
          color='initial'
          textAlign={'center'}
        >
          WHY SOUTH SUDAN?
        </Typography>
        <Typography
          marginTop={3}
          variant='body1'
          color='text.secondary'
          component={'p'}
        >
          South Sudan became the world's newest country in 2011, but Every
          Village began working with the South Sudanese long before in 2000. We
          were with the people when independence was only a dream. We celebrated
          with them when they raised their new flag. And we're going to walk
          with them as long as it takes to build a nation for Christ.
        </Typography>
        <Typography
          marginTop={3}
          variant='body1'
          color='text.secondary'
          component={'p'}
        >
          We have the privilege and opportunity to invest in the foundational
          pillars of this new nation and leave a legacy for the generations to
          come.
        </Typography>
        <Box display={'flex'} justifyContent={'center'} marginTop={4}>
          <Button
            sx={{
              borderRadius: 5,
              margin: 'auto',
              px: 6,
            }}
            size='large'
            variant='outlined'
            color='primary'
          >
            learn about South Sudan
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
