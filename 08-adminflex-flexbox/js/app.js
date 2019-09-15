// delegetion

const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e) => {
     e.preventDefault();
     // Con target podemos ver el elemento que se selecciona
     //className te regresa ambas clases juntas
     // classlist las regresa separadas
     const claseMenu = e.target.classList;

     // crear variable para seleccoinar las flechas y la pagina  
     const contenedor = document.querySelector('.pagina'),
           flechaIzq = document.querySelector('.fa-arrow-left'),
           flehcaDer = document.querySelector('.fa-arrow-right');

     // .contains es una palabra reservada de JS que permite vereficar si existe algo
     if( claseMenu.contains('fa-arrow-left') ){
          // cerrar el menu lateral
          flechaIzq.style.display = 'none';
          flehcaDer.style.display = 'block';
          // add class
          contenedor.classList.add('no-menu');
     }else{
          // abrir el menu lateral
          flechaIzq.style.display = 'block';
          flehcaDer.style.display = 'none';
          // remover
          contenedor.classList.remove('no-menu');
     }
})