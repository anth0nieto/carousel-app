import React from 'react';
import { View, Animated, Image, StyleSheet } from 'react-native';
import CardContent from '@carousel/components/card-content';
import { CardModel } from '@carousel/model';
import {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  SPACING,
  WIDTH_SCREEN,
} from '@carousel/constants';

type CardProps = {
  index: number;
  item: CardModel;
  scrollX: Animated.Value;
};

const styles = StyleSheet.create({
  root: {
    width: WIDTH_SCREEN,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING,
  },
  cardContainer: {
    borderRadius: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    height: '100%',
    width: IMAGE_WIDTH,
    alignItems: 'center',
  },
  cardImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardText: {
    paddingVertical: SPACING,
    paddingHorizontal: SPACING * 2,
    zIndex: 99,
  },
});

const Card: React.FC<CardProps> = ({ index, scrollX, item }) => {
  const inputRange = [
    (index - 1) * WIDTH_SCREEN,
    index * WIDTH_SCREEN,
    (index + 1) * WIDTH_SCREEN,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [50, 0, 50],
  });

  const inputRangeText = [
    (index - 0.2) * WIDTH_SCREEN,
    index * WIDTH_SCREEN,
    (index + 0.2) * WIDTH_SCREEN,
  ];
  const opacityText = scrollX.interpolate({
    inputRange: inputRangeText,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.root}>
      <Animated.View
        style={[styles.cardContainer, { opacity, transform: [{ translateY }] }]}
      >
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <Animated.View
          key={item.key}
          style={[styles.cardText, { opacity: opacityText }]}
        >
          <CardContent title={item.title} description={item.description} />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Card;
