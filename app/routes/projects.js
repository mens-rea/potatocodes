import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {name: 'Wanderast', img: 'assets/images/projects/wanderast.png'}, 
      {name: 'Offcrowd', img: 'assets/images/projects/offcrowd.png'},
      {name: 'Liham PH', img: 'assets/images/projects/liham.png'}
    ];
  }
});
