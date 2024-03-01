import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Header = () => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs 
    value={value}
        onChange={handleChange}
      className='header'
      //value={value}
      //onChange={handleChange}
      TabIndicatorProps={{
        style: {
          backgroundColor: "white"
        }
      }}
      TabTextProps={{
        style: {
          color: "white"
        }
      }}
      //aria-label="secondary tabs example"
    >
      <Tab value="one" label="Item One" />
      <Tab value="two" label="Item Two" />
    </Tabs>
  )
}

export default Header