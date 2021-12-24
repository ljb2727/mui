import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import theme from 'theme';
import Divider from '@mui/material/Divider';

import Chip from '@mui/material/Chip';

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
  console.log(props.target);
  return (
    <>
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
