const getLocationOrigin = () => {
  return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
}

const companyName = '悟空CRM'
const version = 'V11.3.2'
const baiduKey = '34IxL26Zjd4Qe8j8lwiw6BMzv5zdSEwL'

export default {
  version,
  companyName,
  getLocationOrigin,
  baiduKey
}
