import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import drivingList from 'assets/drivingList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import { Link as RouterLink } from 'react-router-dom';
export default function ImgMediaCard() {
  const [name, setName] = useState('');
  const click = (props) => {
    setName(props);
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      {drivingList.map((item, index) => {
        return (
          <Card key={index} sx={{ marginBottom: '10px' }}>
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} subtitle={item.info} />
            </ImageListItem>

            <CardActions>
              <Stack direction={'row'} spacing={2} sx={{ mx: 'auto' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => click(item.title)}
                  disableElevation
                  startIcon={<GolfCourseIcon />}
                  fullWidth={true}
                  component={RouterLink}
                  to="/driving_list"
                >
                  연습장 정회원
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  startIcon={<SportsGolfIcon />}
                  fullWidth={true}
                >
                  연습장 비회원
                </Button>
              </Stack>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
