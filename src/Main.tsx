import React, { useRef, useEffect } from 'react';
import {
  FlatList,
  Animated,
  View,
  SafeAreaView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@carousel/store/root-state';
import { CardModel } from '@carousel/model';
import { setIndex } from '@carousel/store/slice';
import Card from './components/card';
import { HEIGHT_SCREEN, DATA, WIDTH_SCREEN } from './constants';
import FooterButtons from './components/footer-buttons';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flexGrow: 0,
  },
  flatListContent: { height: HEIGHT_SCREEN * 0.5 },
});

const Main: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const currentIndex = useSelector((state: RootState) => state.app.index);
  const flatlistRef = useRef<FlatList<CardModel>>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flatlistRef) {
      flatlistRef?.current?.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flatlistRef]);

  const setCurrentIndex = (i: number) => {
    dispatch(setIndex(i));
  };

  const onHandlePressLeft = () => {
    setCurrentIndex(currentIndex - 1);
    flatlistRef?.current?.scrollToOffset({
      offset: (currentIndex - 1) * WIDTH_SCREEN,
      animated: true,
    });
  };

  const onHandlePressRight = () => {
    setCurrentIndex(currentIndex + 1);
    flatlistRef?.current?.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCurrentIndex(Math.round(e.nativeEvent.contentOffset.x / WIDTH_SCREEN));
  };

  const getItemLayout = (data, index: number) => ({
    index,
    length: WIDTH_SCREEN,
    offset: index * WIDTH_SCREEN,
  });

  const renderItem = ({ item, index }) => (
    <Card index={index} item={item} scrollX={scrollX} />
  );

  return (
    <View style={styles.root}>
      <StatusBar hidden />
      <SafeAreaView style={styles.container}>
        <Animated.FlatList
          ref={flatlistRef}
          data={DATA}
          keyExtractor={item => item.key}
          horizontal
          initialScrollIndex={currentIndex}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: true,
            },
          )}
          bounces={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          style={styles.flatListContainer}
          contentContainerStyle={styles.flatListContent}
          showsHorizontalScrollIndicator={false}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
        />

        <FooterButtons
          onPressLeft={onHandlePressLeft}
          onPressRight={onHandlePressRight}
          disabledLeft={currentIndex === 0}
          disabledRight={currentIndex === DATA.length - 1}
          opacityLeft={currentIndex === 0 ? 0.2 : 1}
          opacityRight={currentIndex === DATA.length - 1 ? 0.2 : 1}
        />
      </SafeAreaView>
    </View>
  );
};

export default Main;
