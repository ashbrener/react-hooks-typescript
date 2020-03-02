import { css } from '@emotion/core';

export interface IStyleProps {
  font: IFontStyleProps;
  color: string;
}

interface IFontStyleProps {
  size?: string;
  weight?: 300 | 500 | 'bold';
}

export function cssrStyles(props: IStyleProps) {
  const {
    font: { size, weight },
    color
  } = props;

  return css`
    ${ size ? `font-size: ${ size } !important` : null};
    ${ weight ? `font-weight: ${ weight } !important` : null};
    
    ${ color ? `color: ${ color } !important;` : null };
`;
}