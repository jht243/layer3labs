import { ImageProps } from 'next/image';

export interface Team {
  image: ImageProps;
  name: string;
  position: string;
  text: string;
  linkedin: string;
}
