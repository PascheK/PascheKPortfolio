import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="GreenTomato">
    <Container>
      <Title>
      GreenTomato <Badge>2022</Badge>
      </Title>
      <P>
      Application mobile du site web blue-tomato.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Site web</Meta>
          <Link href="#">
            - <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plateforme</Meta>
          <span>IOS / ANDROID</span>
        </ListItem>
        <ListItem>
          <Meta>Technologie</Meta>
          <span>Dart, Flutter</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/greenTomato_01.png" alt="GreenTomato" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'