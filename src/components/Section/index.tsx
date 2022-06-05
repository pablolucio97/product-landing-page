import React, { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface SectionProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    id: string;
}

export function Section({
    style,
    className,
    children,
    id
}: SectionProps) {
    return (
        <Container
            style={style}
            className={className}
            id={id}
        >
            {children}
        </Container>
    )
}