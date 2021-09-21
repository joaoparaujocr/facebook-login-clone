$(document).ready(function(){
    
    openWindowLogin();
    closeFormsLogin();
    openWindowRegister();
    closeFormsRegister();
    submitRegister();
    focusInput();
    blurInput();

    function openWindowLogin(){
        $('#btn-login').click(function(e){
            $('#bgFormLogin').fadeIn();
            $('.main').css('filter', 'blur(4px)');
            e.stopPropagation();
        })
    }

    function closeFormsLogin(){
        let el = $('body, .close-btn');
        el.click(function(){
            $('#bgFormLogin').fadeOut();
            $('.main').css('filter', 'none')
        });

        $('#formLogin').click(function(e){
            e.stopPropagation();
        });
    }

    function openWindowRegister(){
        $('#btn-cadastrar').click(function(e){
            $('#bgFormRegister').fadeIn();
            $('.main').css('filter', 'blur(4px)');
            e.stopPropagation();
        })
    }

    function closeFormsRegister(){
        let el = $('body, .close-btn');
        el.click(function(){
            $('#bgFormRegister').fadeOut();
            $('.main').css('filter', 'none')
        });

        $('#formRegister').click(function(e){
            e.stopPropagation();
        });
    }

    function inputInvalido(elemento){
        elemento.css('border', 'solid #b94a48 1px')
        elemento.next().css('display', 'block')
    }

    function focusInput(){
        $('input[name=firstName], input[name=lastName], input[name=email], input[name=password]').focus(function(){
            resetInput($(this))
        })
    }

    function blurInput(){
        $('input[name=firstName], input[name=lastName], input[name=email], input[name=password]').blur(function () { 
            if($(this).val() == '' || $(this).val() == '*'){
                inputInvalido($(this));
            }
        });
    }

    function resetInput(elemento){
        elemento.next().css('display', 'none')
        elemento.css('border', 'solid #ccc 1px')
    }

    function nameValidation(name){
        if(name == ' '){
            return false;
        }

        let nameValue = name.toUpperCase();
        let amountName = nameValue.split(" ").length;
        let strName = nameValue.split(" ");
        if(amountName >= 1){
            for(var i = 0; i < amountName; i++){
                if(strName[i].match(/^[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]{1,}$/)){
                    return strName[i].match(/^[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]{1,}$/);
                }
    
                else{
                    return !!strName[i].match(/^[A-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]{1,}$/);
                }
            }
        }
        else{
            return false;
        }
    }

    function validationEmail(emailForm){
        var valueEmail = emailForm.val().toLowerCase();
        console.log(valueEmail);
        if(valueEmail == ' '){
            return false;
        }
        if(valueEmail.match(/^([a-z0-9-._]{1,})+@+([a-z.]{1,})$/) == null && valueEmail != 'CAMPO INVALIDO'){
            return false
        }
    }

    function passwordValidation(password){
        let senha = password.val();
        if(senha == ''){
            return false;
        }
    }

    function submitRegister(){
        $('form#formRg').submit(function(e) {
            e.preventDefault();
            let firstName = $('input[name=firstName]');
            let lastName = $('input[name=lastName]');
            let email = $('input[id=email_register]');
            let password = $('input[name=password]');
            //let name = firstName.val() + ' ' + lastName.val()

            // alert(name);

            // alert('formulario enviado');

            if(nameValidation(firstName.val().trim()) == false){
                inputInvalido(firstName);
            }

            if(nameValidation(lastName.val().trim()) == false){
                inputInvalido(lastName); 
            }

            if(validationEmail(email) == false){
                inputInvalido(email);
            }

            if(passwordValidation(password) == false){
                inputInvalido(password);
            }

            else{
                alert('Formulario Enviado')
            }
        })
    }
})