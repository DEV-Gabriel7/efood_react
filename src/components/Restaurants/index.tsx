import Restaurant from '../../models/Restaurants'
import { Card, ButtonCard, CardTitle, CardDescription, Tag, TagContainer } from './styles'


const Restaurants = ({ destach, image, name, category, assessment, description}: Restaurant) => (
    <>
        <Card>
            <img src={image} />
            <TagContainer>
                {destach ? <Tag>Destaque da semana</Tag> : ''}
                <Tag>{category}</Tag>
            </TagContainer>
            <CardTitle>
                <h3>{name}</h3>
                <p>{assessment}<span>★</span></p>
            </CardTitle>
            <CardDescription>{description}</CardDescription>
            <ButtonCard to='/menu'>
                Saiba Mais
            </ButtonCard>
            
        </Card>
    </>
)

export default Restaurants