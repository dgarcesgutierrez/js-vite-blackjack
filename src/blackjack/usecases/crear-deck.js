

import _ from 'underscore';

// exportado de forma independiente
// export const miNombre = 'Daniel';

// extencion better comments para crear documentación de código
/**
 * Esta funcion crea una baraja nueva
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => { // scope lo que esta dentro de estas llaves
 
  if ( !tiposDeCarta  || tiposDeCarta.length === 0) 
    throw new Error('tiposDeCarta es obligatorio como un arreglo de strings');

  if ( !tiposEspeciales  || tiposEspeciales.length === 0) 
    throw new Error('tiposEspeciales es obligatorio como un arreglo de strings');

  let deck = [];

  for (let i = 2; i < 11; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push( i + tipo);
    }
  }
  
  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push( esp + tipo );
    }
  }

  deck = _.shuffle(deck);

  return deck;
}

// exportación por defecto, solo se puede tener uno por archivo.
// export default crearDeck;