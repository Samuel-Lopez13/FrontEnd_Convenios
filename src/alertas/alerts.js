import Swal from 'sweetalert2';

export const Notificacion = {
    CerrarSesion: async (pregunta = '¿Seguro que quieres cerrar sesión?') => {
        return await Swal.fire({
            icon:'warning',
            allowOutsideClick: false,
            allowEscapeKey   : false,
            showCancelButton : true,
            html              : `<b> ${pregunta}</b>`//Aqui se aplican los estilos necesarios
        })
    },
}

export const NotificacionExito={
    ExitosoSimple: async (texto="Exito al realizar la operación") => {
        Swal.fire({
            background: '#CAA8F5',
            position: 'center',
            icon: 'success',
            iconColor:'#840C96',
            showConfirmButton: false,
            timer: 1500,
            html : `<h1 style="color: #432e6c; font-weight: bold">${texto}</h1>`
        })
    },

    ExitosoWMensaje: async (texto="Exito al realizar la operación") => {
        Swal.fire({
            background: '#9cb8ff',
            icon:'success',
            iconColor:'#045cda',
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            html              : `
                                 <h1 style="color: #045cda; font-weight: bold">${texto}</h1>
                                `,
        })
    },
}
export const NotificacionError = {
    ErrorWMensaje:async (msg="Credenciales no validas", msgE="Algo salió mal") => {
        Swal.fire({
            icon: 'error',
            iconColor:'rgba(210,11,11,0.8)',
            showConfirmButton: false,
            html              : `
                                 <h1 style="color:#1B365D; font-weight: bold">${msg}</h1>
                                 <b style="color: #1B365D"> ${msgE}</b>`,
        })
    },
    Error: async (msg="Credenciales no validas") => {
        Swal.fire({
            background: '#CAA8F5',
            icon: 'error',
            iconColor:'rgba(224,0,0,0.8)',
            title: msg,
            showConfirmButton: false,
            timer: 1500
        })
    }
}