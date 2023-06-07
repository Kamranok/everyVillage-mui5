import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, Container } from '@mui/material'

export default function ButtonAppBar() {
  const pages = ['who', 'what', 'where', 'join', 'give']

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='transparent' elevation={0}
         sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ' +
                  'rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              }}>
        <Container>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2, flexGrow: 0, color: 'white' }}
            >
              {/* <MenuIcon /> */}
              <Avatar  sx={{ bgcolor: 'white', color: 'black' }} >EV</Avatar>
            </IconButton>
            <Typography
              color='white'
              variant='h5'
              component='div'
              sx={{ flexGrow: 1 }}
           
            >
              every
              <Typography
                color='white'
                variant='h5'
                fontWeight={'bold'}
                component='span'
                ml={1}
              >
                village
              </Typography>
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{
                mr: 2,
                flexGrow: 0,
                color: 'white',
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
