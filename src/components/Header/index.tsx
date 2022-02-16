import { x } from '@xstyled/styled-components'
import Basket from 'components/Basket'
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

      <Basket value={39.97} />
    </x.header>
  )
}

export default Header
