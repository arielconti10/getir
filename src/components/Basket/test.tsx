import { render, screen } from '@testing-library/react'

import Basket from '.'

describe('<Basket />', () => {
  it('should render the Basket', () => {
    render(<Basket value={50.19} />)

    const basketValue = screen.getByTestId('basket-value')
    expect(basketValue).toHaveTextContent('₺50.19')
  })
})
