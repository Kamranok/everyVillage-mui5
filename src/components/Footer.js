import { Avatar, Box, Container, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import {
  Email,
  EmailOutlined,
  Instagram,
  Pinterest,
  ViewModuleOutlined,
} from '@mui/icons-material'

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Container maxWidth='lg'>
        <Stack
          spacing={1}
          py={3}
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box>
            <Avatar sx={{ bgcolor: 'white', color: 'black' }}>EV</Avatar>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'hidden',
              px: 3,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant='body1'
              fontWeight={'bold'}
              color='rgb(160, 158, 158)'
            >
              © Every Village 2023 /
              <Typography color={'primary.main'} variant='p' component={'span'}>
                {' '}
                Terms of Use
              </Typography>{' '}
              /
              <Typography color={'primary.main'} variant='p' component={'span'}>
                {' '}
                Privacy Policy
              </Typography>
            </Typography>
          </Box>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            spacing={1}
          >
            <FacebookIcon sx={{ color: 'white' }} />
            <Instagram sx={{ color: 'white' }} />
            <Pinterest sx={{ color: 'white' }} />
            <EmailOutlined sx={{ color: 'white' }} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
