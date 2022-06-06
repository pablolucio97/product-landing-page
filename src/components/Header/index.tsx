import { CSSProperties, ReactNode } from "react";
import { Container } from './styles';

interface HeaderProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
    showAnimation?: boolean;
}

export function Header({
    children,
    style,
    className,
    showAnimation
}: HeaderProps) {


    return (
        <Container
            style={style}
            className={className}
            showAnimation={showAnimation}
        >
            {children}
        </Container >
    )
}
