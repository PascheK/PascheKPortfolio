import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Wired">
    <Container>
      <Title>
        Wired <Badge>2020</Badge>
      </Title>
      <P>
      Ce site web et un site web de prévention sur le phising réaliser pour un project.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Site web</Meta>
          <Link href="https://paschek.emf-informatique.ch/214/wired/">
          https://paschek.emf-informatique.ch/214/wired/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plateforme</Meta>
          <span>Google / Safari / Edge</span>
        </ListItem>
        <ListItem>
          <Meta>Technologie</Meta>
          <span>Html, CSS, JS,</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/wired_01.png" alt="Wired" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'