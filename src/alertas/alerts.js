import Swal from 'sweetalert2';

export const NotificacionEjemplo = {
    EjemploAlerta: async (pregunta = '¿Seguro que quieres cerrar sesión?', msg='Serás redirigido al login') => {
        return await Swal.fire({
            icon:'warning',
            allowOutsideClick: false,
            allowEscapeKey   : false,
            showCancelButton : true,
            html              : `<b> ${pregunta}</b><p> ${msg}</p>`//Aqui se aplican los estilos necesarios
        })
    }
}