export const parsePayload = (token) => {
  let base64Url = token.split('.')[1]
  let base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

export const isExpired = (token) => {
    const { exp } = parsePayload(token)

    return exp < (Number(new Date()) / 1000);
}