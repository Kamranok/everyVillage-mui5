import { Box, Grid } from '@mui/material'

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function StandardImageList() {
  return (
    <Grid container bgcolor={'pink'} spacing={1}>
      {numArray.map((num) => (
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              width: '280px',
              height: '280px',
              bgcolor: 'primary.main',
              m: 'auto',
              color: 'white',
            }}
          >
            {num}
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
