import React, { CSSProperties } from 'react';
import { HeroTitle as HeroTitleComponent } from './styles';


interface HeroTitleProps {
  content: string;
  style?: CSSProperties;
  className?: string;
}

export function HeroTitle({ content, style, className }: HeroTitleProps) {
  return (
    <HeroTitleComponent
      style={style}
      className={className}
    >
      {content}
    </HeroTitleComponent>
  )
}