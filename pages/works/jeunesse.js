import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Jeunesse de Porsel">
    <Container>
      <Title>
        Jeunesse de Porsel <Badge>2021-</Badge>
      </Title>
      <P>
      Le site Jeunesse de porsel est un site qui permet à des visiteurs de s'inscrire à des événements. Il y'a également un coté admin avec un dashboard qui permet de gerer les événements.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Site web</Meta>
          <Link href="https://jeunessedeporsel.ch">
            https://jeunessedeporsel.ch <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plateforme</Meta>
          <span>Google / Safari / Edge</span>
        </ListItem>
        <ListItem>
          <Meta>Technologie</Meta>
          <span>Html, CSS, JS, PHP, Jquery</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/jeunesse_01.png" alt="Jeunesse" />
      <WorkImage src="/images/works/jeunesse_02.png" alt="Jeunesse" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'