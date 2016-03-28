Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://ada%40adacode.io:SionS9898@smtp.zoho.com:465'
  Accounts.emailTemplates.siteName = "modernPRS"
  Accounts.emailTemplates.from = "ModernPRS <ada@adacode.io>"
})

Meteor.methods({
  sendVerificationEmail: function () {
      Accounts.sendVerificationEmail(this.userId)
  }
})
