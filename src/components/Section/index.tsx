import React, { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface SectionProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
    id: string;
    minHeight?: string;
    backgroundColor?: string;
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
}

export function Section({
    id,
    minHeight,
    backgroundColor,
    justifyContent,
    alignItems,
    style,
    className,
    children,
}: SectionProps) {
    return (
        <Container
            style={style || {
                backgroundColor: backgroundColor,
                minHeight: minHeight,
                alignItems: alignItems,
                justifyContent: justifyContent,
            }}
            className={className}
            id={id}
        >
            {children}
        </Container>
    )
}