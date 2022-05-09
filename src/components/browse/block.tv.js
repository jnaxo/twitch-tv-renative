import React from 'react';
import { View, Image, Text } from 'react-native';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { blockStyles } from './styles';

const Block = ({ userName, thumbnailUrl, position, handleEnter, handleFocus }) => {
  const { ref, focused } = useFocusable({
    onEnterPress: handleEnter,
    onFocus: handleFocus,
    focusKey: `LIVE-${position}`
  });
  return (
    <View ref={ref} style={blockStyles.container}>
      <Image style={blockStyles.thumbnail} source={{ uri: thumbnailUrl }}/>
      <Text style={blockStyles.title}>{userName}</Text>
      <Text>Stream Title</Text>
      {focused ? '-x-' : '-.-'}
    </View>
  );
};

export default Block;
