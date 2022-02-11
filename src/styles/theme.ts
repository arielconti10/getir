import { defaultTheme } from '@xstyled/styled-components'

const theme = {
  ...defaultTheme,
  radii: {
    ...defaultTheme.radii,
    default: '6px'
  },
  shadows: {
    ...defaultTheme.shadows,
    default: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  },
  durations: {
    ...defaultTheme.durations,
    default: '0.2s'
  },
  colors: {
    ...defaultTheme.colors,
    bg: '#e5e5e5',
    text: '#191919',
    link: '#1d4ed8',
    primary: '#1EA4CE',
    modes: {
      dark: {
        bg: '#10171d',
        text: '#dfdfdf',
        link: '#93c5fd'
      }
    }
  }
}

export default theme
