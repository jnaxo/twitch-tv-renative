import React, { useEffect, useCallback, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getScaledValue } from 'renative';
import { useSelector, useDispatch } from 'react-redux';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { mainStyles } from './styles';
import { Block } from '../';
import { FETCH_CHANNELS_LIVE } from '../../store/types';
import { STYLES } from '../../config';

const LiveChannels = () => {
  const { BLOCK_SIZE } = STYLES;
  const scrollRef = useRef();
  const { setFocus } = useFocusable();
  const liveChannels = useSelector(({ channels }) => channels.live);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_CHANNELS_LIVE });
  }, []);

  useEffect(() => {
    setFocus('LIVE-0');
  }, [])

  const handleKeyExtractor = useCallback(item => item.id, []);

  const handleGetItemLayout = useCallback(
    (_, index) => ({
      length: BLOCK_SIZE.WIDTH,
      offset: (BLOCK_SIZE.WIDTH + getScaledValue(10)) * index,
      index
    }),
    []
  );

  const handleFocus =  useCallback(index => () => {
    scrollRef.current?.scrollToIndex({ index });
  }, []);

  const renderItem = useCallback(({ item, index }) => <Block
    key={index}
    position={index}
    userName={item.user_name}
    thumbnailUrl={item.thumbnail_url.replace('{width}', BLOCK_SIZE.WIDTH).replace('{height}', BLOCK_SIZE.HEIGHT)}
    handleEnter={() => console.log('Go to', index)}
    handleFocus={handleFocus(index)}
  />, []
  );

  return (
    <View style={mainStyles.container}>
      <Text style={mainStyles.title}>{'Live channels: '}</Text>
      <FlatList
        ref={scrollRef}
        data={liveChannels}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={handleKeyExtractor}
        getItemLayout={handleGetItemLayout}
        style={mainStyles.list}
      />
    </View>
  );
};

export default LiveChannels;
