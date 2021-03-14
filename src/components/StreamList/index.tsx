import React from 'react';

import streamThumbNail from '../../images/stream_thumbnail.jpg';

import {
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamAvatar,
  StreamUsername,
  StreamHeader,
  TagRow,
  TagView,
  TagText,
  List,
  StreamDescription,
  StreamCategory,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => {
    return (
      <StreamContainer>
        <StreamThumbnail source={streamThumbNail} />

        <StreamRow>
          <StreamColumn>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1}>Miguelnog</StreamUsername>
            </StreamHeader>

            <StreamDescription numberOfLines={1}>
              Mobile with React Native, Flutter e Firebase
            </StreamDescription>

            <StreamCategory numberOfLines={1}>
              Science & Technology
            </StreamCategory>
          </StreamColumn>

          <TagRow>
            <TagView>
              <TagText>English</TagText>
            </TagView>
          </TagRow>
        </StreamRow>
      </StreamContainer>
    );
  };

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
