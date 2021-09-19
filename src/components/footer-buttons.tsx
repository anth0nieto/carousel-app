import { ARROW_SIZE, SPACING, WIDTH_SCREEN } from '@carousel/constants';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type FooterButtonsProps = {
  disabledLeft: boolean;
  disabledRight: boolean;
  opacityLeft: number;
  opacityRight: number;
  onPressLeft: () => void;
  onPressRight: () => void;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: WIDTH_SCREEN,
    marginTop: SPACING,
    padding: SPACING,
  },
  buttonContainer: { flexDirection: 'row', alignItems: 'center' },
});

const FooterButtons: React.FC<FooterButtonsProps> = ({
  disabledLeft,
  disabledRight,
  opacityLeft,
  opacityRight,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onPressLeft}
        disabled={disabledLeft}
        style={{ opacity: opacityLeft }}
      >
        <View style={styles.buttonContainer}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={ARROW_SIZE}
            color="white"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressRight}
        disabled={disabledRight}
        style={{ opacity: opacityRight }}
      >
        <View style={styles.buttonContainer}>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={ARROW_SIZE}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooterButtons;
