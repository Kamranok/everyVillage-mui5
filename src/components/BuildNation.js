import { Stack, Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function BuildNation() {
  return (
    <Box bgcolor={'rgba(64, 64, 64, .1)'}>
      <Stack
        py={5}
        maxWidth={'lg'}
        mx={'auto'}
        direction={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Box>
          <Typography variant='h6' fontWeight={'bold'} color='#333'>
            building a nation for Christ
          </Typography>
        </Box>
        <Button variant='outlined' sx={{ borderRadius: 4, border: 2 }}>
          give
        </Button>
      </Stack>
    </Box>
  )
}
