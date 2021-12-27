import React, { useState, useRef } from 'react';
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
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function ImgMediaCard() {
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= drivingList.length) {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(true);
  return (
    <>
      {drivingList.map((item, index) => {
        return (
          <Card key={index} sx={{ marginBottom: '10px' }}>
            <ImageListItem key={item.img}>
              {/* <img src={`${item.img}`} alt={item.title} loading="lazy" /> */}
              <Box
                sx={{
                  display: loading ? 'flex' : 'none',
                  width: '100vw',
                  justifyContent: 'center',
                  height: '60vw',
                  alignItems: 'center',
                }}
              >
                <CircularProgress />
              </Box>

              <img
                style={{ display: loading ? 'none' : 'block' }}
                src={`${item.img}`}
                alt={item.title}
                onLoad={imageLoaded}
              />
              <ImageListItemBar title={item.title} subtitle={item.info} />
            </ImageListItem>

            <CardActions>
              <Stack direction={'row'} spacing={2} sx={{ mx: 'auto' }}>
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  startIcon={<GolfCourseIcon />}
                  fullWidth={true}
                  component={RouterLink}
                  to={`/driving_list/${item.title}`}
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
