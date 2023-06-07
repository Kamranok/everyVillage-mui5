import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MediaCard() {
  return (
    <Card
      elevation={4}
      sx={{ maxWidth: 310, px: 1, py: 5, backgroundColor: 'white' }}
    >
      <CardMedia
        sx={{
          height: 100,
          width: 100,
          margin: 'auto',
          backgroundColor: '#f3f0f0',
        }}
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHdIGcJ628FSXzwlKSDp4hAd64BgR5a4FvQ&usqp=CAU'
        title='water'
      />
      <CardContent>
        <Typography
          textAlign={'center'}
          gutterBottom
          variant='h5'
          component='div'
        >
          WATER
        </Typography>
        <Typography variant='body2' color='text.secondary' pt={1}>
          We drill wells, provide spare parts, and facilitate maintenance &
          repair systems to bring safe water to South Sudan.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ borderRadius: 5, margin: 'auto', px: 8 }}
          size='large'
          variant='contained'
          color='primary'
        >
          water life
        </Button>
      </CardActions>
    </Card>
  )
}
