import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
  ListItem,
  List,
  Link,
  Icon,
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { Biosection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'

import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
         Salut, je suis un développeur Web.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading ad="h2" variant="page-title">
              Pasche Killian
            </Heading>
            <p>Créateur digital (Artiste / Developpeur / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Travail
          </Heading>
          <Paragraph>
          Je suis Killian Pasche, un apprenti en informatique qui voudrait se spécialiser dans le développement web et d'exprimer des sentiments à travers des sites Web. Pour le moment j'ai pu réaliser quelque projet pour des sociétés ou bien pour des projets scolaires. Dans mes temps libres je pratique le snowboard.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Biosection>
            <BioYear>2003</BioYear>
            Naissance à l'hôpital de riaz
     
          </Biosection>
          <Biosection>
            <BioYear>2018</BioYear>
           Premier site Web à l'aide de Wordpress
          </Biosection>
          <Biosection>
            <BioYear>2019</BioYear>
           Intégration de l'école des métiers en informatique
          </Biosection>
          <Biosection>
            <BioYear>2021</BioYear>
            Développement du site web de la jeunesse de Porsel
          </Biosection>
          <Biosection>
            <BioYear>2022</BioYear>
           Apprentissage de blender
          </Biosection>
          <Biosection>
            <BioYear>2022</BioYear>
           Apprentissage de flutter / Première application flutter
          </Biosection>
          <Biosection>
            <BioYear>2022</BioYear>
            Reprise du site gestion-saf
          </Biosection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>Apprendre de nouvelle chose, rendre service, crée de nouvelle chose, réaliser des maquettes pour des applications, le graphisme, la modélisation 3D, la programmation Web, la programmation mobile.</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/PascheK" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                  @PascheK
                </Button>
              </Link>

            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/k.pasch7/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
                  @k.pasch7
                </Button>
              </Link>

            </ListItem>

            <ListItem>
              <Link href="#" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord}/>}>
                  @PascheK7#6324
                </Button>
              </Link>

            </ListItem>
          </List>

      

        </Section>
      </Container>
    </Layout>
  )
}
export default Page
