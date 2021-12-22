import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menuList = [
    {
      id: 1,
      name: '홈',
      link: '/home',
    },
    {
      id: 2,
      name: '부킹',
      link: '/booking',
    },
    {
      id: 3,
      name: '1인부킹',
      link: '/onebooking',
    },
    {
      id: 4,
      name: '조인/양도',
      link: '/transfer',
    },
    {
      id: 5,
      name: '국내투어',
      link: '/package',
    },
    {
      id: 6,
      name: '이용후기',
      link: '/epilogue',
    },
    {
      id: 7,
      name: '이벤트',
      link: '/event',
    },
    {
      id: 8,
      name: '쇼핑몰',
      link: '/shop',
    },
  ];

  return (
    <>
      <Box sx={{ minWidth: '100%', bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {menuList.map((item) => (
            <Tab
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
