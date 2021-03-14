import React from 'react';

import { Wrapper, Container, Main } from './styles';
import Heading from '../../components/Heading';
import RecommendedList from '../../components/RecommendedList';
import Title from '../../components/Title';
import { FlatList } from 'react-native-gesture-handler';
import RecommendedChannels from '../../components/RecommendedChannels';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const ComingSoon: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Discover</Heading>,
      },
      {
        key: 'RECOMMENDED_CATEGORIES',
        render: () => <Title>Categories you may like</Title>,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <RecommendedList />,
      },
      {
        key: 'RECOMMENDED_LIVE_CHANNELS',
        render: () => <Title>Live Channels you may like</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <RecommendedChannels />,
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
    <Wrapper>
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
    </Wrapper>
  );
};

export default ComingSoon;
