// eslint-disable-next-line no-undef
export const serverUrl = `${process.env.REACT_APP_TYPE}://${process.env.REACT_APP_ADDR}:${process.env.REACT_APP_PORT}`
// eslint-disable-next-line no-undef
export const environmentType = `${process.env.REACT_APP_ENVIRONMENT}`
// eslint-disable-next-line no-undef
export const requireRecaptcha = `${process.env.REACT_APP_REQUIRE_RECAPTCHA}`

export const apiUrl = '/api/v1'
export const fullUrl = `${serverUrl}${apiUrl}`

export const nodesUrl = {
  users: `${fullUrl}/users`,
  authorization: `${fullUrl}/authorization`,
  logs: `${fullUrl}/logs`,
}