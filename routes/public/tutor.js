/*
* ******************************************************************
*   Licensed Materials - Property of IBM                           *
*   Copyright IBM Corp. 2016 All rights reserved.                  *
*                                                                  *
*   US Government Users Restricted Rights - Use, duplication or    *
*   disclosure restricted by GSA ADP Schedule Contract with        *
*   IBM Corp.                                                      *
*                                                                  *
* ******************************************************************
*/


const API_PATH = '/api/v1/tutor';
var tutorservice = require('../../Services/tutor');

module.exports = (router) => {

  router.post(API_PATH, (request, response, next) => {

    tutorservice.saveTutor(request.body);



  });
  router.get(API_PATH, (request, response, next) => {

    return tutorservice.getTutor().then((data)=>{
      response.status(200).send(data)

    })
 



  });
};
