import dayjs from 'dayjs'

/**
 * 日付フォーマット関数
 * @param date - 日付
 * @param format - 'YMD'のフォーマット
 */
export const adjustDayFormathFunc = (
  date: string | Date | number,
  format: string = 'YYYY年MM月DD日'
) => {
  return typeof date === 'number' ? dayjs.unix(date).format(format) : dayjs(date).format(format)
}

/**
 * 日付差分取得
 * @param date
 * @param date
 */
export const adjustDayDiffFunc = (prev: string, current: string) => {
  return dayjs(current).diff(prev, 'day')
}
