import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { palette } from '@mui/system';
export default function ImgMediaCard() {
  const drivingList = [
    {
      title: '연습장1',
      tel: '010-1234-5678',
      info: '어쩌구',
      image: './static/images/a1.jpg',
    },
    {
      title: '연습장1',
      tel: '010-1234-5678',
      info: '어쩌구',
      image: './static/images/a2.jpg',
    },
    {
      title: '연습장1',
      tel: '010-1234-5678',
      info: '어쩌구',
      image: './static/images/a3.jpg',
    },
    {
      title: '연습장1',
      tel: '010-1234-5678',
      info: '어쩌구',
      image: './static/images/a4.jpg',
    },
    {
      title: '연습장1',
      tel: '010-1234-5678',
      info: '어쩌구',
      image: './static/images/a5.jpg',
    },
  ];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        //image="./static/images/a1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction={'row'} spacing={2} sx={{ mx: 'auto' }}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
