import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View``;

export const Wrapper = styled.View`
  padding: 0 10px;
  justify-content: center;
  margin-bottom: 14px;
`;

export const ChannelThumbnail = styled.Image`
  width: 310px;
  height: 190px;
`;

export const ChannelInfo = styled.View`
  margin: 6px 0;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: ${colors.tag};
  margin-top: 8px;
`;

export const Column = styled.View`
  margin-left: 10px;
  margin-top: 5px;
`;

export const ChannelName = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;
  font-size: 17px;
`;

export const ChannelDescription = styled.Text`
  color: ${colors.black};
  max-width: 240px;
`;

export const ChannelCategory = styled.Text`
  color: ${colors.gray};
`;

export const TagRow = styled.View`
  flex-direction: row;
`;

export const TagView = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  margin-top: 8px;
  margin-right: 8px;
  border-radius: 10px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
`;
