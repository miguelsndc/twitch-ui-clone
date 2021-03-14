import React from 'react';

import data from '../../data';

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  TagView,
  TagRow,
  TagText,
  Info,
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => {
    return (
      <CategoryContainer>
        <CategoryImage source={item.source} />
        <CategoryName numberOfLines={1}>{item.name}</CategoryName>
        <CategoryStatus>
          <Info numberOfLines={1}>131K Viewers</Info>
        </CategoryStatus>
        <TagRow>
          <TagView>
            <TagText>Gaming</TagText>
          </TagView>
        </TagRow>
      </CategoryContainer>
    );
  };

  return (
    <List>
      {data.map((item) => {
        return <CategoryItem key={item.name} item={item} />;
      })}
    </List>
  );
};

export default CategoryList;
