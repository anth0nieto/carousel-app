import { Dimensions } from 'react-native';
import faker from 'faker';
import { CardModel } from './model';

export const { width: WIDTH_SCREEN, height: HEIGHT_SCREEN } =
  Dimensions.get('screen');

export const IMAGE_WIDTH = WIDTH_SCREEN * 0.8;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 0.6;
export const SPACING = 15;
export const ARROW_SIZE = 50;

export const RANDOM_IMAGES = [
  'https://source.unsplash.com/300x300/?nature,water',
  'https://source.unsplash.com/300x300/?developer,it',
  'https://source.unsplash.com/300x300/?food,cakes',
];

faker.seed(10);
export const DATA = [...RANDOM_IMAGES].map(
  (image): CardModel => ({
    key: faker.random.uuid(),
    image,
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  }),
);
