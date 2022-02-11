import { useColorMode } from '@xstyled/styled-components'

import BaseLayout from 'layouts/Base'

import Button from 'components/Button'

const HomeLayout = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleColor = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  return (
    <BaseLayout flexDirection="column">
      <Button onClick={toggleColor}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
    </BaseLayout>
  )
}

export default HomeLayout
