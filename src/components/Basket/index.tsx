import { x } from '@xstyled/styled-components'
import Image from 'next/image'

export type BasketProps = {
  value?: number
}

const Basket = ({ value }: BasketProps) => {
  return (
    <x.div
      display="flex"
      alignItems="center"
      alignContent="center"
      w="130px"
      h="76px"
      padding="25px"
      backgroundColor="#147594"
      position="absolute"
      right="5%"
      gap="8px"
    >
      <Image
        src="/img/basket-icon.svg"
        alt="Basket icon"
        width={24}
        height={24}
      />
      <x.span fontSize="14px" color="white" data-testid="basket-value">
        ₺{value}
      </x.span>
    </x.div>
  )
}

export default Basket
