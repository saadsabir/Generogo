$().ready(function(){
  //function to check if spaces don't exists
  $.validator.addMethod( "NoWhiteSpaceAtBeginn", function( value, element ) {
  return this.optional( element ) || /^[^\s].*/.test( value );
  }, "*effacez les espaces au debut de ce champs" );
  $("#ovform").validate({
    rules: {
      username : {
        required : true,
        minlength : 3,
        maxlength : 32,
        NoWhiteSpaceAtBeginn : true
      },
      password : {
        required : true,
        minlength : 5,
        maxlength : 20,
        NoWhiteSpaceAtBeginn : true
      }
    },
    messages : {
      username : {
        required : "*",
        minlength : "*identifiant doit contenir au moins 3 caractères",
        maxlength : "*identifiant doit contenir au maximum 32 caractères"
      },
      password : {
        required : "*",
        minlength : "*mot de passe doit contenir au moins 5 caractères",
        maxlength : "*mot de passe doit contenir au maximum 20 caractères"
      }
    }
  });
});
