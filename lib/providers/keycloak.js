const { assignDefaults } = require('./_utils')

module.exports = function (strategy) {
  assignDefaults(strategy, {
    _scheme: 'oauth2',
    response_type: 'code',
    grant_type: 'authorization_code',
    code_challenge_method: 'S265',
    authorization_endpoint: `${strategy.server}/auth/realms/${strategy.realm}/protocol/openid-connect/auth`,
    userinfo_endpoint: `${strategy.server}/auth/realms/${strategy.realm}/protocol/openid-connect/userinfo`,
    access_token_endpoint: `${strategy.server}/auth/realms/${strategy.realm}/protocol/openid-connect/token`
  })
}
