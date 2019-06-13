$().ready(function(){
  //function to check if letters only in the input
  jQuery.validator.addMethod("lettersonly",function(value,element){
    return  this.optional( element ) || /^[a-z\s]+$/i.test(value);
  },"*entrez que des lettres");
  //function to check if whitespaces don't exists
  $.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "*ce champs n'accepte pas les espaces" );
//function to check if whitespaces in begin don't exists
$.validator.addMethod( "NoWhiteSpaceAtBeginn", function( value, element ) {
return this.optional( element ) || /^[^\s].*/.test( value );
}, "*effacez les espaces au debut de ce champs" );
  $("#ovform").validate({
    rules: {
      firstname : {
        required : true,
        minlength : 2,
        maxlength : 20,
        lettersonly : true,
        NoWhiteSpaceAtBeginn : true
      },
      lastname : {
        required : true,
        minlength : 2,
        maxlength : 20,
        lettersonly : true,
        NoWhiteSpaceAtBeginn : true
      },
      username : {
        required : true,
        minlength : 3,
        maxlength : 32,
        nowhitespace : true,
        NoWhiteSpaceAtBeginn : true
      },
      password : {
        required : true,
        minlength : 5,
        maxlength : 20,
        nowhitespace : true,
        NoWhiteSpaceAtBeginn : true
      },
      cpassword : {
        required : true,
        minlength : 5,
        maxlength : 20,
        equalTo : "#mdp",
        nowhitespace : true,
        NoWhiteSpaceAtBeginn : true
      }
    },
    messages : {
      firstname : {
        required : "*",
        minlength : "*nom doit contenir au moins 2 caractères",
        maxlength : "*nom doit contenir au maximum 20 caractères"
      },
      lastname : {
        required : "*",
        minlength : "*prénom doit contenir au moins 2 caractères",
        maxlength : "*prénom doit contenir au maximum 20 caractères"
      },
      username : {
        required : "*",
        minlength : "*identifiant doit contenir au moins 3 caractères",
        maxlength : "*identifiant doit contenir au maximum 32 caractères"
      },
      password : {
        required : "*",
        minlength : "*mot de passe doit contenir au moins 5 caractères",
        maxlength : "*mot de passe doit contenir au maximum 20 caractères"
      },
      cpassword : {
        required : "*",
        minlength : "*mot de passe doit contenir au moins 5 caractères",
        maxlength : "*mot de passe doit contenir au maximum 20 caractères",
        equalTo : "*les mots de passe ne sont pas identiques"
      }
    }
  });
});
