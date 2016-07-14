$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
  Handlebars.registerHelper("formatPhoneNumber", function(phoneNumber) {
    phoneNumber = phoneNumber.toString();
    return "(" + phoneNumber.substr(0,3) + ") " + phoneNumber.substr(3,3) + "-" + phoneNumber.substr(6,4);
  });
