import { Dimensions } from 'react-native';
import faker from 'faker';
import { CardModel } from './model';

export const { width: WIDTH_SCREEN, height: HEIGHT_SCREEN } =
  Dimensions.get('screen');

export const IMAGE_WIDTH = Math.round(WIDTH_SCREEN * 0.6);
export const IMAGE_HEIGHT = IMAGE_WIDTH * 0.6;
export const SPACING = 15;
export const ARROW_SIZE = 50;
export const ITEM_WIDTH = Math.round(WIDTH_SCREEN * 0.6) + SPACING * 1.5;
export const SPACER_WIDTH = (WIDTH_SCREEN - ITEM_WIDTH) / 2;

export const RANDOM_IMAGES = [
  'https://source.unsplash.com/300x300/?nature,water',
  'https://source.unsplash.com/300x300/?developer,it',
  'https://source.unsplash.com/300x300/?food,cakes',
];

export const LEFT_SPACE = 'left-space';
export const RIGHT_SPACE = 'right-space';

faker.seed(20);
export const DATA = [...RANDOM_IMAGES].map(
  (image): CardModel => ({
    key: faker.random.uuid(),
    image,
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  }),
);
