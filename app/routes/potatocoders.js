import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {name: 'John Dominic Dasig', img: ''}, 
      {name: 'Aaron Marzan', img: ''},
      {name: 'Mhariell Mosqueriola', img: ''},
      {name: 'John Dave Villaluz', img: ''},
      {name: 'Josh Caballero', img: ''},
      {name: 'Alyzhia Agbayani', img: ''},
      {name: 'Kenneth Bastian', img: ''}
    ];
  }
});
