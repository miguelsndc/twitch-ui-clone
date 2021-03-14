import React from 'react';

import {
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
  List,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem: React.FC = () => {
    return (
      <ChannelContainer>
        <LeftSide>
          <Avatar />
          <Column>
            <Username>@miguelsndc</Username>
            <Info>36 new videos</Info>
          </Column>
        </LeftSide>
        <RightSide>
          <WhiteCircle />
        </RightSide>
      </ChannelContainer>
    );
  };

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
