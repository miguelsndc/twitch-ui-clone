import React from 'react';

import Thumbnail from '../../images/stream_thumbnail.jpg';

import {
  Wrapper,
  Container,
  ChannelThumbnail,
  ChannelInfo,
  Row,
  Avatar,
  Column,
  ChannelName,
  ChannelDescription,
  ChannelCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const RecommendedChannels: React.FC = () => {
  const Channel: React.FC = () => {
    return (
      <Wrapper>
        <ChannelThumbnail source={Thumbnail} />
        <ChannelInfo>
          <Row>
            <Avatar />
            <Column>
              <ChannelName>CBLOL</ChannelName>
              <ChannelDescription numberOfLines={1}>
                ProLegends: Final Brasileira - Dia 2 - Testando textos longos,
                um, dois, tres
              </ChannelDescription>
              <ChannelCategory>Teamfight Tatics</ChannelCategory>
              <TagRow>
                <TagView>
                  <TagText>Portuguese</TagText>
                </TagView>
                <TagView>
                  <TagText>Esports</TagText>
                </TagView>
              </TagRow>
            </Column>
          </Row>
        </ChannelInfo>
      </Wrapper>
    );
  };

  return (
    <Container>
      <Channel />
      <Channel />
      <Channel />
      <Channel />
      <Channel />
    </Container>
  );
};

export default RecommendedChannels;
