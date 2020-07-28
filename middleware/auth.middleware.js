const User = require('../models/user.model.js')

module.exports.requireAuth = async function(req, res, next) {
  if (!req.signedCookies.userId) {
    res.redirect("auth/login");
    return;
  }
  console.log(`auth x ne hehe: ${req.signedCookies.userId}`)
  var user =  await User.findOne({_id: req.signedCookies.userId})

  if (!user) {
    res.redirect("auth/login");
    return;
  }

  res.locals.user = user;

  next();
};
