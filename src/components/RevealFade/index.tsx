import { ReactNode } from 'react';
//@ts-ignore
import Fade from 'react-reveal/Fade'


interface FadeReveal {
    children: ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}

export function RevealFade({
    children,
    left,
    right,
    top,
    bottom,
}: FadeReveal) {
    return (
        <Fade
            left={left}
            top={top}
            right={right}
            bottom={bottom}
        >
            {children}
        </Fade>
    )
}