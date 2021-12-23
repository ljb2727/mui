import React from 'react';
import { styled } from '@mui/system';
import CustomCard from './Card';

const BoxWrap = styled('div')({
  background: '#c8c8',
  display: 'flex',
  overflowX: 'scroll',
});

const timeList = [
  { number: 1, time: 30, option: true },
  { number: 2, time: 0, option: true },
  { number: 3, time: 50, option: false },
  { number: 4, time: 0, option: true },
  { number: 5, time: 0, option: false },
  { number: 6, time: 120, option: false },
];

const DrivingList = () => {
  return (
    <>
      <BoxWrap>
        <CustomCard>1</CustomCard>
      </BoxWrap>
    </>
  );
};

export default DrivingList;
