import { ImageProps } from 'next/image';

export default interface ClientsType {
  image: ImageProps;
  text: string;
  name: string;
  width: number;
  height: number;
}
