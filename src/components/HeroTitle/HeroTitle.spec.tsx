import {ReactNode} from 'react'
import {render, screen} from '@testing-library/react'
import {HeroTitle} from '.'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../themes/theme'

interface ChildrenProps{
    children: ReactNode
}

const StyledProvider : React.FC = ({children} : ChildrenProps) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

describe('HeroTitle', () => {
    it('should render correctly', () => {
        render(
            <HeroTitle
                content='HeroTitle content'
            />,
            {
                wrapper: StyledProvider
            }
        )

            const component = screen.getByText('HeroTitle content')
            expect(component).toBeInTheDocument()

    })
})
