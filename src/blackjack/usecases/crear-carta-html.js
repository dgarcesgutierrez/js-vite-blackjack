
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = ( carta ) => {

  if ( !carta ) throw new Error('La carta es un argumento obligatorio');

  // <img class="carta" src="assets/cartas/10C.png" alt="">
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`; // 3H, JD
  imgCarta.classList.add('carta');

  return imgCarta;

}