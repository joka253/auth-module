const { assignDefaults } = require('./_utils')

module.exports = function (strategy) {
  assignDefaults(strategy, {
    _scheme: 'oauth2',
    response_type: 'token',
    grant_type: 'client_credentials',
    authorization_endpoint: `${strategy.server}/auth/realms/${strategy.realm}/protocol/openid-connect/auth`,
    userinfo_endpoint: `${strategy.server}/auth/realms/${strategy.realm}/protocol/openid-connect/userinfo`,
    access_token_endpoint: `${strategy.server}/auth/realms/${strategy.realm}/protocol/openid-connect/token`
  })
}
