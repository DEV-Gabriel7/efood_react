import logo from '../../assets/images/logo.png'
import { ButtonLink, HeaderDiv, HeaderTitle } from './styles'

export type Props = {
    button?: boolean
    text: string
    page: 'home' | 'menu';
}


const Header = ({ button, text, page }: Props) => (
    <HeaderDiv page={page}>
        <div className="container">
            {page === 'menu' ? (
                <>
                    <ButtonLink to='/'>Restaurantes</ButtonLink>
                    <img src={logo} />
                    <HeaderTitle page={page}>{text}</HeaderTitle>

                </>

            ) : (
                <>
                    {button && <ButtonLink to='/'>Restaurantes</ButtonLink>}
                    <img src={logo} />
                    <HeaderTitle page={page}>{text}</HeaderTitle>
                </>
            )}
        </div>
    </HeaderDiv>


)

export default Header