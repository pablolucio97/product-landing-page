import React, { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';


interface FooterBadge {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function FooterBadge({ children, style, className }: FooterBadge) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}