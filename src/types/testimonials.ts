import { ImageProps } from 'next/image';

export default interface TestimonialsType {
  logo: ImageProps;
  text: string;
  photo: ImageProps | null;
  name: string;
  width: number;
  height: number;
  company: string;
}
