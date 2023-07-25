import { mensajeFinal, pedirCarta, valorCarta, crearCartaHTML } from "./";


/**
 * Turno de la computadora
 * @param {Number} puntosMinimos punto  mínimos que la computadora necesita para ganar
 * @param {HTMLElment} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElment} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Array<string>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

  if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
  if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta( deck );
  
    puntosComputadora = puntosComputadora + valorCarta( carta );
    puntosHTML.innerHTML = puntosComputadora;

    const imgCarta = crearCartaHTML( carta );
    divCartasComputadora.append( imgCarta );

    if ( puntosMinimos > 21 ) {
      break;
    }
  
  } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );

  mensajeFinal(puntosComputadora, puntosMinimos);

}