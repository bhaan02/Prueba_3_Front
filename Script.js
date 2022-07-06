function validar(event)
{
    var nombre = document.getElementById("txt_nombre").value;
    var apellido = document.getElementById("txt_apellido").value;
    var direccion = document.getElementById("txt_direccion").value;
    var correo = document.getElementById("txt_correo").value;
    var rut = document.getElementById("txt_rut").value;
    var telefono = document.getElementById("txt_telefono").value;
    var marca = document.getElementById("opt_marca").value;
    var genero = document.getElementById("opt_genero").value;
    var tipo = document.getElementById("opt_tipo").value;
    var cantidad = document.getElementById("num_cantidad").value;
    var fecha = document.getElementById("date_consulta").value;

    if (nombre.length>0 && nombre.length<3)
    {
        alert("Nombre debe tener al menos 3 caracteres");
        event.preventDefault();
        document.getElementById("txt_nombre").focus();
        return;
    }
    if (apellido.length>0 && apellido.length<3)
    {
        event.preventDefault()
        alert("Apellido debe tener al menos 3 caracteres");
        document.getElementById("txt_apellido").focus();
        return;
    }
    if ((rut.length < 9 || rut.length > 10 || rut.indexOf('-')<0 || rut.indexOf('.')>=0) && rut.length!==0)
    {
        event.preventDefault()
        alert("Rut debe tener entre 9 a 10 caracteres sin puntos y con guion");
        document.getElementById("txt_rut").focus();
        return;
    }   
    if (direccion.length>0 && direccion.length<3)
    {
        event.preventDefault()
        alert("Direccion debe tener al menos 3 caracteres");
        document.getElementById("txt_direccion").focus();
        return;
    }
    if ((correo.indexOf('@')<0 || correo.indexOf('.')<0) && correo.length>0 )
    {
        event.preventDefault()
        alert("correo debe incluir un @ y un punto");
        document.getElementById("txt_correo").focus();
        return;
    }
    if ((telefono.charAt(0)!='9' || telefono.indexOf('+')>0 || telefono.indexOf('-')>0 || telefono.length<9 || telefono.length> 9) && telefono.length>0 )
    {
        event.preventDefault()
        alert("Telefono deben empezar con el numero 9, y debe tener 9 numeros, sin el signo + ni -");
        document.getElementById("txt_telefono").focus();
        return;
    }

    if (marca.length==0)
    {
        document.getElementById("opt_marca").focus();
        return;
    }
    if (genero.length==0)
    {
        document.getElementById("opt_genero").focus();
        return;
    }    
    if (tipo.length==0)
    {
        document.getElementById("opt_tipo").focus();
        return;
    } 
    if (fecha.length==0)
    {
        document.getElementById("date_consulta").focus();
        return;
    }
    {
        alert("DATOS DE CONTACTO:   \n"+
        "Nombre: "+nombre+"\n"+
        "Apellido: "+apellido+"   \n"+
        "Rut: "+rut+"   \n"+
        "Dirección: "+direccion+"   \n"+
        "Correo: "+correo+"   \n"+
        "Telefono: "+telefono+"   \n"+
        "Marca: "+marca+"   \n"+
        "Genero: "+genero+"   \n"+
        "Tipo de lente: "+tipo+"   \n"+
        "Cantidad: "+cantidad+"   \n"+
        "Fecha Solicitud: "+fecha);
    }

    /* 
    GERSON PLAZA
    JEAN PLAZA
    */
}