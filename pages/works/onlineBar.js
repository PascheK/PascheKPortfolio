import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OnlineBar">
    <Container>
      <Title>
        OnlineBar <Badge>2021</Badge>
      </Title>
      <P>
      Site web utilisant l'api "CocktailDB", découvrez tous plein de cocktails délicieux.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Site web</Meta>
          <Link href="https://paschek.emf-informatique.ch/307/OnlineBar/index.php">
          https://paschek.emf-informatique.ch/307/OnlineBar/index.php <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/onlineBar_01.png" alt="OnlineBar" />
      <WorkImage src="/images/works/onlineBar_02.png" alt="OnlineBar" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'