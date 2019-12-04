import { ISprkImg } from './sprk-img.interface';

export interface ISprkFooterImg extends ISprkImg {
  /**
   * Expects a space separated string
   * of classes to be added to the
   * image if `imgSrc` has a value.
   */
  imgCSS?: string;
}

