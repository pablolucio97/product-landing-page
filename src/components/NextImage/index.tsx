import React, { CSSProperties } from 'react';
import { NextImage as NextImageComponent, Container } from './styles';
import { name } from '../../../package.json'

interface NextImageProps {
    url: string;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
}

export function NextImage({
    url,
    width,
    height,
    style,
    className
}: NextImageProps) {
    return (
        <Container>
            <NextImageComponent
                src={url}
                alt={name}
                width={width}
                height={height}
                style={style}
                className={className}
            />
        </Container>
    )
}