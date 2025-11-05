import { FooterContainer } from "./styles"
import logo from '../../assets/images/logo.png'
import fbImg from '../../assets/images/facebook.png'
import igImg from '../../assets/images/instagram.png'
import ttImg from '../../assets/images/twitter.png'

const Footer = () => (
    <FooterContainer>
        <img src={logo} />
        <div className="links">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={igImg} alt="" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={fbImg} alt="" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <img src={ttImg} alt="" />
            </a>
        </div>
        <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
    </FooterContainer>
)

export default Footer