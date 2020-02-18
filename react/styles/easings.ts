export type EasingsTypes = typeof easings

const easings = {
  ease_in_cubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  ease_out_cubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  ease_in_out_cubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
} as const

export default easings
