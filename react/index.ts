import React from 'react'

export const nl2br = (text: string) => {
  const regex = /(\n)/g
  // eslint-disable-next-line no-undef
  return text.split(regex).map((line, index) => (line.match(regex) ? React.createElement('br', { key: index }) : line))
}
