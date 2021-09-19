const appConstants = require('../constant/constant');

const otpController = {

  signin: (req, res, next) => {
      try {
        if(req.body.username === 'admin' && req.body.password === 'admin') {
          res.status(200).send({
            token: appConstants.token,
            username: 'admin',
            fname: 'Umesh',
            lname: 'Samod'
          });
        } else {
          res.status(401).send({
            msg: 'Username or password incorrect.'
          });
        }
        
      } catch (error) {
        res.status(500).send({ msg: 'Error in login.' });
      }
    },
  
  }
  
  module.exports = otpController;
