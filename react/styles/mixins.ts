import { css } from 'styled-components'

export type MixinsTypes = typeof mixins

const mixins = {
  text_hidden: css`
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
  `,
  text_ellipsis: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `
} as const

export default mixins
