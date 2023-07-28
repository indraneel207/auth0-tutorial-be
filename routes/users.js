var express = require('express')
var router = express.Router()

const { auth, requiredScopes } = require('express-oauth2-jwt-bearer')

const checkJwt = auth({
  audience: 'https://dev-ozpmzyr356adqgtv.us.auth0.com/api/v2/',
  issuerBaseURL: `https://dev-ozpmzyr356adqgtv.us.auth0.com/`
})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/get', checkJwt, function (req, res, next) {
  res.send({ data: 'respond with a private resource' })
})

module.exports = router
