const aws = require('./aws.json')
const braintree = require('./braintree.json')
const crypto = require('./crypto.json')
const facebook = require('./facebook.json')
const generic = require('./generic.json')
const github = require('./github.json')
const google = require('./google.json')
const heroku = require('./heroku.json')
const linkedin = require('./linkedin.json')
const mailchimp = require('./mailchimp.json')
const mailgun = require('./mailgun.json')
const slack = require('./slack.json')
const square = require('./square.json')
const stripe = require('./stripe.json')
const telegram = require('./telegram.json')
const trello = require('./trello.json')
const twilio = require('./twilio.json')
const twitter = require('./twitter.json')

const { compileCollection } = require('../helpers')

module.exports = {
    aws: compileCollection(aws),
    braintree: compileCollection(braintree),
    crypto: compileCollection(crypto),
    facebook: compileCollection(facebook),
    generic: compileCollection(generic),
    github: compileCollection(github),
    google: compileCollection(google),
    heroku: compileCollection(heroku),
    linkedin: compileCollection(linkedin),
    mailchimp: compileCollection(mailchimp),
    mailgun: compileCollection(mailgun),
    slack: compileCollection(slack),
    square: compileCollection(square),
    stripe: compileCollection(stripe),
    telegram: compileCollection(telegram),
    trello: compileCollection(trello),
    twilio: compileCollection(twilio),
    twitter: compileCollection(twitter),
}
