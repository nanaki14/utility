import * as api from './common'

// ======================================================
// REST

export const getSample = async () => {
  const res = await api.get<{}>('/')

  if (res.status !== 200) {
    return false
  }

  return res.data
}