document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    }

    const emailCC = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: '',
    }

    //seleccionar los elementos de las interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc')
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner')

    //asignar eventos
    inputEmail.addEventListener('input', validar);
    inputCC.addEventListener('input', validarCC);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);
    
    btnReset.addEventListener('click', function (event) {
        event.preventDefault();
        resetFormulario();
    })

    function enviarEmail (event) {
        event.preventDefault();

        // spinner.classList.add('flex');
        spinner.classList.remove('hidden'); //remueve hideen para que se muestre el spinner

        setTimeout(() => {
            // spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            
            //crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            
            formulario.appendChild(alertaExito);
            
            setTimeout(() => {
                alertaExito.remove();
            }, 2000);
            
            resetFormulario();
        }, 3000); //luego de 3 seg se agrega nuevamente el hidden para que desaparezca el spinner
    
    };

    function validar (event) {
        if(event.target.value.trim() === '') { //trim para eliminar los espacios vacios
            mostrarAlerta(`El campo ${event.target.id} es ogligatorio`, event.target.parentElement);
            email[event.target.name] = '';
            comprobarEmail();
            return;
        }

        if(event.target.id ==='email' && !validarEmail(event.target.value)) {
            mostrarAlerta('Email no es valido', event.target.parentElement);
            email[event.target.name] = '';
            comprobarEmail();   
            return;
        }
        
        limpiarAlerta(event.target.parentElement);

        //asignar los valores
        email[event.target.name] = event.target.value.trim().toLowerCase();
        
        //comprobar el objeto de email
        comprobarEmail();
   };

   function validarCC (event) {
    if(event.target.value.trim() === '') { //trim para eliminar los espacios vacios
        mostrarAlerta(`El campo ${event.target.id} NO es ogligatorio`, event.target.parentElement);
        email[event.target.name] = '';
        comprobarEmail();
        return;
    }

    if(!validarEmail(event.target.value)) {
        mostrarAlerta('Email no es valido', event.target.parentElement);
        emailCC[event.target.name] = ''; 
        return;
    }
        
    limpiarAlerta(event.target.parentElement);

    //asignar los valores
    emailCC[event.target.name] = event.target.value.trim().toLowerCase();
    
    //comprobar el objeto de email
    comprobarEmail();
};

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
        
        //generar alerta en HTML                                                                                    
        const error = document.createElement ('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        //inyectar el error al formulario
        referencia.appendChild(error);
    };
    
    function limpiarAlerta (referencia) {
        //comprueba si ya existe  una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    };

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    };

    function comprobarEmail () {
        if(Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;                                                     
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false; 
    }

    function resetFormulario () {
        //reiniciar el objeto
        email.email= '';    
        email.asunto= '';
        email.mensaje= '';
        
        comprobarEmail();
        formulario.reset();
    }
});