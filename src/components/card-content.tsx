import { SPACING } from '@carousel/constants';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type CardContentProps = {
  title: string;
  description: string;
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginTop: SPACING,
  },
  description: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '800',
    alignSelf: 'flex-end',
  },
});

const CardContent: React.FC<CardContentProps> = ({ title, description }) => {
  return (
    <>
      <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>
        {title}
      </Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </>
  );
};

export default CardContent;
