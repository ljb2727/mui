import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("change")
  };

  const menuList = [{
          id: 1,
          name: "홈",
          link: "/home"
      },
      {
          id: 2,
          name: "부킹",
          link: "/main_booking"
      },
      {
          id: 3,
          name: "1인부킹",
          link: "/main_onebooking"
      }, {
          id: 4,
          name: "조인/양도",
          link: "/main_transfer"
      },
      {
          id: 5,
          name: "국내투어",
          link: "/main_package"
      },
      {
          id: 6,
          name: "이용후기",
          link: "/epilogue"
      },
      {
          id: 7,
          name: "이벤트",
          link: "/event"
      },
      {
          id: 8,
          name: "쇼핑몰",
          link: "/shop"
      }
  ]
  return (
    <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {menuList.map((item)=>(
            <Tab label={item.name} key={item.id} />
        ))}
      </Tabs>
    </Box>
  );
}
