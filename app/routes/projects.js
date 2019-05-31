import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {name: 'Wanderast', img: 'assets/images/projects/wanderast.png', link: 'https://wanderast.com'}, 
      {name: 'Offcrowd', img: 'assets/images/projects/offcrowd.png', link: 'https://offcrowd.com'},
      {name: 'Liham PH', img: 'assets/images/projects/liham.png', link: 'https://liham.ph'}
    ];
  }
});
