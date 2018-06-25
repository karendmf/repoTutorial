import { InMemoryDbService } from 'angular-in-memory-web-api';
// Se cargan los productos a la base para ser mostrados.
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const productos = [
      { id: 1, name: 'Miel de Azahar', details: 'De color ámbar claro, perfumada y suave al paladar. Procedente del polen de limoneros, naranjos, mandarinos. Efectos sedantes, ayudando conciliar el sueño. Es también antiespasmódica.', price: 125, img : '../../assets/img/miel/azahar.jpg' },
      { id: 2, name: 'Miel de Romero', details: 'De color ámbar muy claro y blanco cuando está cristalizada. Aromática y dulce. Estimulante hepático que favorece la descongestión del hígado. Indicada para las úlceras de estómago y dismenorrea. No recomendada a hipertensos.', price: 125, img : '../../assets/img/miel/romero.jpg'  },
      { id: 3, name: 'Miel de Eucaliptus', details: 'De color ocre. Muy aromática con un sabor característico a madera. Antiséptico de las vías respiratorias y urinarias, de efectos balsámicos y vermífugos. Indicada contra catarros y afecciones del árbol respiratorio.', price: 178, img : '../../assets/img/miel/eucalipto.jpg'},
      { id: 4, name: 'Miel de Tomillo', details: 'De tono rojizo y sabor agradable. Indicada para las afecciones respiratorias de tipo inflamatorio, tos convulsiva y asma. Reguladora de la tensión arterial. Muy indicada como tonificante ante la fatiga y la astenia.', price: 136, img : '../../assets/img/miel/tomillo.jpg'},
      { id: 5, name: 'Miel de Espliego', details: 'De color ámbar y sabor característico a lavanda. Por su poder bactericida y antiséptico. Indicada en uso externo para picaduras de insectos, quemaduras solares y heridas. Antidiarreico. Preventivo de gripes, bronquitis, resfriados. Por su alto contenido en hierro, tiene las mismas indicaciones que la miel de castaño. Favorece el sueño, modera la irritabilidad, la agresividad y el estrés.', price: 174, img : '../../assets/img/miel/espliego.jpg'},
      { id: 6, name: 'Miel de Tilo', details: 'Procedente de las flores del tilo. De color amarillo suave con un aroma fragante. Se cristaliza fácilmente por lo que se endurece deprisa. Útil en la acidez, flatulencias, ulceras gástricas o duodenales. Propiedades antibacterianas. Útil en la bronquitis, gripe y resfriados. Posee propiedades sedantes siendo muy útil en ansiedad e insomnio.', price: 124, img : '../../assets/img/miel/tilo.jpg'},
      { id: 7, name: 'Miel de Trebol', details: 'Procedente de la flor de trébol De color amarillo suave. Es energetizante. Muy útil para cansancio o fatiga, personas mayores, épocas de exámenes, recuperación post operatoria.', price: 189, img : '../../assets/img/miel/trebol.jpg'},
      { id: 8, name: 'Miel de Alfalfa', details: 'Procedente de las flores de alfalfa. De color ambarino blanco, de buen sabor y propiedades similares a la miel de de trébol.', price: 165, img : '../../assets/img/miel/alfalfa.jpg'}
    ];
    return {productos};
  }
}