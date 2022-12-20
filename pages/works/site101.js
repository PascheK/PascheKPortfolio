import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Site web 101">
    <Container>
      <Title>
        Site web 101 <Badge>2019</Badge>
      </Title>
      <P>
     Premier site web que j'ai réaliser utilisant le Html, CSS.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Site web</Meta>
          <Link href="https://paschek.emf-informatique.ch/101/">
          https://paschek.emf-informatique.ch/101/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plateforme</Meta>
          <span>Google / Safari / Edge</span>
        </ListItem>
        <ListItem>
          <Meta>Technologie</Meta>
          <span>Html, CSS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/101_01.png" alt="101" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'