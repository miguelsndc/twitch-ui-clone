import React from 'react';

import { FlatList } from 'react-native-gesture-handler';

import CategoryList from '../../components/CategoryList';
import Heading from '../../components/Heading/';
import Title from '../../components/Title';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

import { FollowingWrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <StreamList />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <StreamList />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <ChannelList />,
      },
    ];

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <FollowingWrapper>
      <Container>
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </FollowingWrapper>
  );
};

export default Following;
