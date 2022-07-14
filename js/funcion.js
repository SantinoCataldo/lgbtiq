function calcularRespuesta(){
    let cont=0;

    if (document.getElementById('2').checked){
        cont++;
    }
    if (document.getElementById('4').checked){
        cont++;
    }
    if (document.getElementById('9').checked){
        cont++;
    }
    if (document.getElementById('12').checked){
        cont++;
    }
    if (document.getElementById('13').checked){
        cont++;
    }

    if (cont==5){
        Swal.fire({
            icon: 'success',
            title: 'Le Acerto 5/5',
          })
    }
    if (cont==4){
        Swal.fire({
            icon: 'success',
            title: 'Le Acerto 4/5',
          })
    }
    if (cont==3){
        Swal.fire({
            icon: 'warning',
            title: 'Le Acerto 3/5',
          })
    }
    if (cont==2){
        Swal.fire({
            icon: 'error',
            title: 'Le Acerto 2/5',
          })
    }
    if (cont==1){
        Swal.fire({
            icon: 'error',
            title: 'Le Acerto 1/5',
          })
    }
    if (cont==0){
        Swal.fire({
            icon: 'error',
            title: 'Le Acerto 0/5',
          })
    }
}

function botonAccion(){
    const boton = document.querySelector('button');
    const caja = document.querySelector('.quiz-cont');
    caja.classList.toggle('active');
    boton.classList.toggle('active');
}