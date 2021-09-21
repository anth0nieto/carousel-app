import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type CardContentProps = {
  title: string;
  description: string;
  isPair: boolean;
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  descriptionContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  description: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '800',
    alignSelf: 'center',
  },
});

const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
  isPair,
}) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text
          style={[styles.title, { color: isPair ? 'white' : 'black' }]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {title}
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text
          numberOfLines={4}
          style={[styles.description, { color: isPair ? 'white' : 'black' }]}
        >
          {description}
        </Text>
      </View>
    </>
  );
};

export default CardContent;
