import React from 'react';
import { styled } from 'styled-components';
import { Hashtag } from 'component/Hashtag';

const CategorySelector = ({ selectedCategory, setSelectedCategory }: any) => {
  const categories = ['BirthCafe', 'Cafe', 'Restaurant'];

  return (
    <Row>
      {categories.map((category) => {
        return (
          <Hashtag
            key={category}
            type={category}
            disabled={selectedCategory !== category}
            onClick={() => setSelectedCategory(category)}
          />
        );
      })}
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

export default CategorySelector;
