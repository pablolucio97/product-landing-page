import React, { CSSProperties, ReactNode } from 'react';
import { ContainerBox } from './styles';

interface ContainerProps {
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
}

export function Container({
    style,
    className,
    children,
}: ContainerProps) {
    return (
        <ContainerBox
            style={style}
            className={className}
        >
            {children}
        </ContainerBox>
    )
}