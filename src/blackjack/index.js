import _ from 'underscore';
// import por defecto se puede poner un nombre diferente y el por defecto traerá el export por default
// import crearDeck, {miNombre} from './usecases/crear-deck';
// importar elemento con un alias para usar en el documento:
// import { crearDeck as crearNuevoDeck } from "./usecases/crear-deck";
// import { crearDeck } from "./usecases/crear-deck";
// import { pedirCarta } from "./usecases/pedir-carta";
// import { valorCarta } from './usecases/valor-carta';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from "./usecases";

/* 
* 2C = Two of Clubs
* 2D = Two of Diamonds
* 2H = Two of Hearts
* 2S = Two of Spades
*/
let deck = [];
const tipos = ['C', 'D', 'H', 'S']; 
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const marcadores = document.querySelectorAll('small');
const marcadorJugador = marcadores[0];
const marcadorComputadora = marcadores[1];

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


deck = crearDeck( tipos, especiales );

const valor = valorCarta( pedirCarta( deck ) );


// Evento pedir carta
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta( deck );
  
  puntosJugador = puntosJugador + valorCarta( carta );
  marcadorJugador.innerHTML = puntosJugador;

  const imgCarta = crearCartaHTML( carta );
  divCartasJugador.append( imgCarta );

  if ( puntosJugador > 21 ) {
    console.warn('Ya has perdido');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, marcadorComputadora, divCartasComputadora, deck );
    
  } else if ( puntosJugador === 21 ) {
    console.warn('21, muy bien ya casi ganas');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, marcadorComputadora, divCartasComputadora, deck );
  }

});

// Evento detener juego jugador
btnDetener.addEventListener('click', () => {

  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora( puntosJugador, marcadorComputadora, divCartasComputadora, deck );

});

// Evento reiniciar juego
btnNuevo.addEventListener('click', ()=> {

  console.clear();

  deck = [];
  deck = crearDeck(tipos, especiales);

  puntosJugador = 0;
  puntosComputadora = 0;

  marcadorJugador.innerText = 0;
  marcadorComputadora.innerText = 0;

  divCartasJugador.innerHTML = '';
  divCartasComputadora.innerHTML = '';

  btnDetener.disabled = false;
  btnPedir.disabled = false;

});
