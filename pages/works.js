import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbJeunesse from '../public/images/works/jeunesse_eyecatch.png'
import thumbTomato from '../public/images/works/greenTomato_eyecatch.png'
import thumb101 from '../public/images/works/101_eyecatch.png'
import thumbWired from '../public/images/works/wired_eyecatch.png'
import thumbOnlineBar from '../public/images/works/onlineBar_eyecatch.png'

const Works = () => (
    <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="jeunesse" title="Jeunesse de Porsel" thumbnail={thumbJeunesse}>
            Le site Jeunesse de porsel est un site qui permet à des visiteurs de s'inscrire à des événements. Il y'a également un coté admin avec un dashboard qui permet de gerer les événements.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="greenTomato"
            title="GreenTomato"
            thumbnail={thumbTomato}
          >
            Application mobile de blue-tomato réalisé en flutter.
          </WorkGridItem>
        </Section>

       
   
      </SimpleGrid>


      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
        Project scolaire
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="site101" thumbnail={thumb101} title="Site web 101">
            Premier site web en Html, css.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="wired" thumbnail={thumbWired} title="Wired">
            Site de prévention sur le phishing.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="onlineBar" thumbnail={thumbOnlineBar} title="OnlineBar">
            Le meilleur bar en ligne jamais crée, chercher, découvrer des cocktails au gout délicieux...
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    </Layout>
)

export default Works