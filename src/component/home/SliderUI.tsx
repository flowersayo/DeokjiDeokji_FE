import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { Slider } from '@mui/material';
import { styled } from 'styled-components';
const SliderUI = ({
  temperature,
  setTemperature,
}: {
  temperature: number | undefined;
  setTemperature: any;
}) => {
  const [value, setValue] = useState(temperature);
  const marks = [
    {
      value: 0,
      label: '0°C',
    },

    {
      value: 100,
      label: '100°C',
    },
  ];
  return (
    <CustomSlider
      defaultValue={50}
      aria-label="ios slider"
      valueLabelDisplay="on"
      value={value}
      onChange={(e, v) => setValue(v as number)}
      onChangeCommitted={(e, v) => setTemperature(v as number)}
      marks={marks}
    />
  );
};
const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#bfbfbf',
  height: 2,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 23,
    width: 23,
    backgroundColor: '#74FAB9',

    strokeWidth: '1.5px',
    border: '1px solid black',
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#74FAB9',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 1,
    color: '#DCDCDC',
  },
  '& .MuiSlider-rail': {
    opacity: 1,
    height: 1.5,
    backgroundColor: '#DCDCDC',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#DCDCDC',
    height: 20,
    width: 1.5,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: '#DCDCDC',
    },
  },
}));
export default SliderUI;
