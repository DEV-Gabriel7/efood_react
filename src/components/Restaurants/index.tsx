import { Card, ButtonCard, CardTitle, CardDescription, Tag, TagContainer } from './styles'

export const getDescription = (descricao: string) => {
    if (descricao.length > 165) {
      return descricao.slice(0, 170) + '...'
    }
    return descricao
  }

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}
const Restaurants = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  

  return (
    <Card>
      <img src={capa} />
      <TagContainer>
        {destacado ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{tipo}</Tag>
      </TagContainer>
      <CardTitle>
        <h3>{titulo}</h3>
        <p>{avaliacao}<span>★</span></p>
      </CardTitle>
      <CardDescription>{getDescription(descricao)}</CardDescription>
      <ButtonCard to={`/menu/${id}`}>
        Saiba Mais
      </ButtonCard>
    </Card>
  )
}

export default Restaurants
