import React from 'react';
import BaseSwiper from 'components/Swiper';

const timeList = [
  { number: 1, time: 30, option: true },
  { number: 2, time: 0, option: true },
  { number: 3, time: 50, option: false },
  { number: 4, time: 0, option: true },
  { number: 5, time: 0, option: false },
  { number: 6, time: 120, option: false },
  { number: 7, time: 0, option: true },
  { number: 8, time: 0, option: false },
  { number: 9, time: 120, option: false },
];
const timeList2 = [
  {
    floor: 1,
    target: [
      { number: 1, time: 30, option: true },
      { number: 2, time: 0, option: true },
      { number: 3, time: 50, option: false },
      { number: 4, time: 0, option: true },
      { number: 5, time: 0, option: false },
      { number: 6, time: 120, option: false },
      { number: 7, time: 0, option: true },
      { number: 8, time: 0, option: false },
      { number: 9, time: 120, option: false },
    ],
  },
  {
    floor: 2,
    target: [
      { number: 1, time: 30, option: true },
      { number: 2, time: 0, option: true },
      { number: 3, time: 50, option: false },
      { number: 4, time: 0, option: true },
      { number: 5, time: 0, option: false },
      { number: 6, time: 120, option: false },
      { number: 7, time: 0, option: true },
      { number: 8, time: 0, option: false },
      { number: 9, time: 120, option: false },
    ],
  },
  {
    floor: 3,
    target: [
      { number: 1, time: 30, option: true },
      { number: 2, time: 0, option: true },
      { number: 3, time: 50, option: false },
      { number: 4, time: 0, option: true },
      { number: 5, time: 0, option: false },
      { number: 6, time: 120, option: false },
      { number: 7, time: 0, option: true },
      { number: 8, time: 0, option: false },
      { number: 9, time: 120, option: false },
    ],
  },
];

const DrivingList = () => {
  return (
    <>
      <BaseSwiper item={timeList} />
      <BaseSwiper item={timeList2} />
    </>
  );
};

export default DrivingList;
