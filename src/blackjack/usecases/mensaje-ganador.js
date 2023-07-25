
 
/**
 * Funcion alerta juego finalizado genera un mensaje con el resultado final
 * @param {Number} marcadorFinalComputadora marcardor final de la computadora
 * @param {Number} marcadorFinalJugador marcador final del jugador
 */
export const mensajeFinal = ( marcadorFinalComputadora, marcadorFinalJugador ) => {

  if ( !marcadorFinalComputadora || !marcadorFinalJugador ) throw new Error('Los puntajes de los jugadores so necesarios');

  setTimeout(() => {
    if ( marcadorFinalComputadora === marcadorFinalJugador ) {
      alert('Ah ocurrido un empate :(');
    } else if ( marcadorFinalJugador > 21 ) {
      alert('Lo sentimos gano computadora');
    } else if ( marcadorFinalComputadora > 21 ) {
      alert('Jugador ganador');
    } else {
      alert('Lo sentimos gano computadora');
    }
  }, 500 );

}