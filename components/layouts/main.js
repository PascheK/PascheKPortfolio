import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelRoom from '../voxel-room'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="PascheK's homepage" />
        <meta name="author" content="Pasche Killian" />
        <meta name="author" content="pascheK" />
        <title>Pasche Killian - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <VoxelRoom />
        {children}
      </Container>
    </Box>
  )
}
export default Main
