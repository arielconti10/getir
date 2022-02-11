import { x, SystemProps } from '@xstyled/styled-components'
import Header from 'components/Header'

type BaseLayoutProps = {
  children?: React.ReactNode
} & SystemProps

const BaseLayout = ({ children, ...props }: BaseLayoutProps) => {
  return (
    <x.main
      display="flex"
      flex="1"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Header />

      {children}
    </x.main>
  )
}

export default BaseLayout
