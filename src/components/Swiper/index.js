import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import theme from 'theme';
import Divider from '@mui/material/Divider';

import Chip from '@mui/material/Chip';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Import Swiper styles
const swiperStyle = {
  width: '90px',
};

const CustomBox = styled('div')({
  backgroundColor: theme.white,
  padding: 0,
  borderRadius: 4,
  margin: 4,
});

const StyledChip = styled(Chip)({
  position: 'absolute',
  top: 0,
  right: 0,
});

const BaseSwiper = ({ props }) => {
  const [open, setOpen] = useState(false);
  const timeCheck = (props) => {
    props ? console.log('타임있어') : setOpen(true);
  };
  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        message="타임이 없습니다."
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          타입이 없습니다
        </Alert>
      </Snackbar>
      <Divider>{`${props.floor}층`}</Divider>
      <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ textAlign: 'center', marginBottom: 40 }}
      >
        {props.target.map((item, i) => (
          <SwiperSlide style={swiperStyle} key={i} value={item.time}>
            <Box
              onClick={() => timeCheck(item.time)}
              style={{
                background: item.time ? theme.default : theme.disabled,
                padding: '10px 4px 4px',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                marginTop: 15,
              }}
            >
              {item.option && (
                <StyledChip label="좌우 전용" color="info" size="small" />
              )}

              <CustomBox>{item.number}</CustomBox>
              <Box mt={1}>
                {Number(item.time) ? (
                  <Box>{item.time}</Box>
                ) : (
                  <Box>타임 없음</Box>
                )}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BaseSwiper;
