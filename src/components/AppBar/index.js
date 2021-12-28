import * as React from 'react';
import { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import theme from 'theme';

export default function Navi() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menuList = [
    {
      id: 0,
      name: '홈',
      link: '/',
    },
    {
      id: 1,
      name: '연습장',
      link: '/driving',
    },
    {
      id: 2,
      name: '1인부킹',
      link: '/onebooking',
    },
    {
      id: 3,
      name: '조인/양도',
      link: '/transfer',
    },
    {
      id: 4,
      name: '국내투어',
      link: '/package',
    },
    {
      id: 5,
      name: '이용후기',
      link: '/epilogue',
    },
    {
      id: 6,
      name: '이벤트',
      link: '/event',
    },
    {
      id: 7,
      name: '쇼핑몰',
      link: '/shop',
    },
  ];

  const path = useLocation();

  useEffect(() => {
    menuList.map((e) => {
      if (path.pathname.indexOf(e.link) >= 0) {
        setValue(e.id);
      }
      return false;
    });
  });

  return (
    <>
      <Box sx={{ minWidth: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ style: { background: theme.base.primary } }}
        >
          {menuList.map((item) => (
            <Tab
              sx={{ minWidth: '2em' }}
              component={RouterLink}
              label={item.name}
              to={item.link}
              key={item.id}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
}
