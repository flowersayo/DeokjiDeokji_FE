import React, { useState } from 'react';
import { Body1_1 } from 'styles/font';
import { styled } from 'styled-components';
import CheckIconSrc from 'assets/icons/check.svg';
import UnCheckIconSrc from 'assets/icons/uncheck.svg';

const SelectBox = ({
  option,
  setOption,
}: {
  option: number;
  setOption: any;
}) => {
  const options = [
    {
      id: 0,
      text: '덕지순례 가려고요!',
    },
    { id: 1, text: '덕지순례 다녀온 기록 남기려고요!' },
  ];

  console.log(option);
  return (
    <Box>
      {options.map(({ text, id }) => (
        <Row key={id}>
          <Body1_1>{text}</Body1_1>
          {option === id ? (
            <img src={CheckIconSrc} />
          ) : (
            <img
              src={UnCheckIconSrc}
              onClick={() => {
                setOption(id);
                console.log(id);
              }}
            />
          )}
        </Row>
      ))}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export default SelectBox;
