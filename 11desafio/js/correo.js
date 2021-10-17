service_id: 'service_46usxmj';
template_id: 'template_murrdmt';

// function logMail() {
//   emailjs.init("user_j2TxB8ZQtFXXf8WKVEqYO");
//   };

// function enviarCorreo(parametros){
//   var tempParametros = 
//       from_name= "buceocoder@gmail.com"
//       to_name="jmzava@gmail.com"
//       message="mensaje de prueba"
// }

// emailjs.sendForm(serviceID, templateID, tempParametros)
// .then(function(res){
//     console.log("enviado",res.status);
// })
btnEnvioCorreo.addEventListener("click", envioCorreo);


function envioCorreo(){
var data = {
  service_id: 'service_46usxmj',
  template_id: 'template_murrdmt',
  user_id: 'buceo',
  template_params: {
      'username': 'BUCEOCODER',
      'to_name':'jmzava@gmail.com'
  }
};

$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
  type: 'POST',
  data: JSON.stringify(data),
  contentType: 'application/json'
}).done(function() {
  alert('Your mail is sent!');
}).fail(function(error) {
  alert('Oops... ' + JSON.stringify(error));
})
}