import { Container, Stack } from '@mui/material'
import Card from './Card'

function OptionsCards() {
  return (
    <>
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          rowGap={2}
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          sx={{
            mt: {
              xs: -5,
              sm: -15,
            },
          }}
        >
          <Card />
          <Card />
          <Card />
        </Stack>
      </Container>
    </>
  )
}

export default OptionsCards
