import React from 'react'
import { ThemeProvider } from 'styled-components'
import colors, { ColorsTypes } from './colors'
import sizes, { SizesTypes } from './sizes'
import easings, { EasingsTypes } from './easings'
import mixins, { MixinsTypes } from './mixins'
import GlobalStyles from './GlobalStyles'

export type stylesTypes = {
  colors: ColorsTypes
  mixins: MixinsTypes
  easings: EasingsTypes
  sizes: SizesTypes
}

const styles: stylesTypes = {
  colors,
  sizes,
  easings,
  mixins
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <GlobalStyles />
      <ThemeProvider theme={styles}>{children}</ThemeProvider>
    </div>
  )
}

export default ThemeWrapper
