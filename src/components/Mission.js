import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const missionSudan = `https://media.npr.org/assets/img/2017/03/07/gettyimages-644961772-50_custom-3f762ec87fc5036d09f9cc0186acb96d65c6cb1f.jpg`

export default function Mission() {
  return (
    <Box
      style={{
        backgroundImage: `url(${missionSudan})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '1',
      }}
    >
      <Container maxWidth='md'>
        <Stack
          sx={{ height: '450px' }}
          spacing={5}
          justifyContent='center'
          alignItems='center'
        >
          <Typography variant='h3' fontWeight={'bold'} color='white'      sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
                  'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              }}>
            OUR MISSION
          </Typography>
          <Typography color='white' fontSize={'1.2rem'} textAlign={'center'}      sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
                  'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              }}>
            We exist to bring glory to God through the transformation of every
            village in South Sudan by the spread of the gospel and community
            development.
          </Typography>
          <Button
            sx={{ borderRadius: 5 }}
            size='large'
            variant='contained'
            color='primary'
          >
            Statement of Faith
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
