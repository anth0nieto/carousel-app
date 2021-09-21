import React from 'react';
import { View, Animated, Image, StyleSheet } from 'react-native';
import CardContent from '@carousel/components/card-content';
import { CardModel } from '@carousel/model';
import {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  SPACING,
  ITEM_WIDTH,
  LEFT_SPACE,
  RIGHT_SPACE,
  SPACER_WIDTH,
} from '@carousel/constants';

type CardProps = {
  index: number;
  item: CardModel;
  scrollX: Animated.Value;
};
const styles = StyleSheet.create({
  root: {
    width: ITEM_WIDTH,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: SPACING,
  },
  cardContainer: {
    borderRadius: 10,
    paddingBottom: 10,
    height: '60%',
    width: IMAGE_WIDTH,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  const isPair = index % 2 === 0;
  const inputRange = [
    (index - 2) * IMAGE_WIDTH,
    (index - 1) * IMAGE_WIDTH,
    index * IMAGE_WIDTH,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [0, -25, 0],
  });

  const inputRangeText = [
    (index - 0.2) * IMAGE_WIDTH,
    index * IMAGE_WIDTH,
    (index + 0.2) * IMAGE_WIDTH,
  ];
  const opacityText = scrollX.interpolate({
    inputRange: inputRangeText,
    outputRange: [1, 0, 1],
  });

  if (item.key === LEFT_SPACE || item.key === RIGHT_SPACE) {
    return <View style={{ width: SPACER_WIDTH }} />;
  }

  return (
    <View style={styles.root}>
      <Animated.View
        style={[
          styles.cardContainer,
          {
            opacity,
            transform: [{ translateY }],
            backgroundColor: isPair ? 'black' : 'white',
          },
        ]}
      >
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <Animated.View
          key={item.key}
          style={[styles.cardText, { opacity: opacityText }]}
        >
          <CardContent
            isPair={isPair}
            title={item.title}
            description={item.description}
          />
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Card;
