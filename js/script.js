$(function(){

    $("#cadastropsy").validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            user: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 8
            },
            confirm_password: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
            cpf: {
                required: true,
                minlength: 8
              },
            email: {
                required: true,
                email: true
            },
            fone: {
                required: true,
            }
        },
        messages: {
         
            nome: {
                required: "Digite seu NOME antes de confirmar",
                minlength: "Seu nome deve conter pelo menos 2 LETRAS"
            },

            email: {
            required: "Digite seu E-mail antes de confirmar",
            email:"Tente outro E-MAIL, este não é válido!"
            },

            fone: {
                required: "Por favor informe um número de telefone"
            },

            user: {
                required: "Digite seu nome de USUÁRIO antes de confirmar",
                minlength: "Seu nome deve conter pelo menos 3 LETRAS"
            },

            password: {
                required: "Digite uma SENHA de pelo menos 8 Dígitos para confirmar",
                minlength: "Sua SENHA deve conter pelo menos 8 Dígitos"
            },

            confirm_password: {
                required: "Repita sua SENHA para confirmar",
                minlength: "Sua SENHA deve conter pelo menos 8 Dígitos",
                equalTo: "As SENHAS digitadas não estão iguais"
            },

            cpf: {
                required: "Digite seu CPF de pelo menos 11 Dígitos para confirmar",
                minlength: "Seu CPF deve conter pelo menos 11 Dígitos"
            },                     
        }

    });

    $("#loginpsy").validate({
        rules: {
           
            user: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 8
            },
        },
        messages: {
         
            user: {
                required: "Digite seu nome de USUÁRIO antes de confirmar",
                minlength: "Seu nome deve conter pelo menos 3 LETRAS"
            },

            password: {
                required: "Digite uma SENHA de pelo menos 8 Dígitos para confirmar",
                minlength: "Sua SENHA deve conter pelo menos 8 Dígitos"
            },                    
        }
    });

    $("#fone").mask ("(00)0000-0000");
    $('#cpf').mask('000.000.000-00');

});

function menu () {
    let menu = document.getElementById ("menu")
    if (getComputedStyle(menu).display=="none")
    {menu.style.display = "flex"}
    else 
    {menu.style.display = "none"}
}
