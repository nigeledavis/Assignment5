//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://nigeldavis:Hotsauce22!@ds127994.mlab.com:27994/assignment3dbase', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyDAOf_hMTLF0xifyJejbs12CtxR3oRXHXY'
  },
  port: 8080
};
