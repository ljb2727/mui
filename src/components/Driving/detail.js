import React from 'react';
import BaseSwiper from 'components/Swiper';

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
      { number: 11, time: 30, option: true },
      { number: 12, time: 0, option: true },
      { number: 13, time: 50, option: false },
      { number: 14, time: 0, option: true },
      { number: 15, time: 0, option: false },
      { number: 16, time: 120, option: false },
      { number: 17, time: 0, option: true },
      { number: 18, time: 0, option: false },
      { number: 19, time: 120, option: false },
    ],
  },
  {
    floor: 3,
    target: [
      { number: 21, time: 30, option: true },
      { number: 22, time: 0, option: true },
      { number: 23, time: 50, option: false },
      { number: 24, time: 0, option: true },
      { number: 25, time: 0, option: false },
      { number: 26, time: 120, option: false },
      { number: 27, time: 0, option: true },
      { number: 28, time: 0, option: false },
      { number: 29, time: 120, option: false },
    ],
  },
];

const DrivingList = () => {
  return (
    <>
      {timeList2.map((e, i) => (
        <BaseSwiper props={timeList2[i]} key={i} />
      ))}
    </>
  );
};

export default DrivingList;
