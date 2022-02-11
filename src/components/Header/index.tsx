import { x } from '@xstyled/styled-components'
import Image from 'next/image'

// export type HeaderProps = {}

const Header = () => {
  return (
    <x.header
      display="flex"
      position="relative"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="76px"
      px="100px"
      backgroundColor="primary"
    >
      <x.h1 w="141px" justifyContent="center" alignContent="center">
        <Image src="/img/logo.svg" width="140" height="40" alt="Market" />
      </x.h1>
      <x.div
        display="flex"
        alignItems="center"
        alignContent="center"
        w="129px"
        h="100%"
        padding="25px"
        backgroundColor="#147594"
        position="absolute"
        right="5%"
      >
        <x.span>₺ 39,97</x.span>
      </x.div>
    </x.header>
  )
}

export default Header
