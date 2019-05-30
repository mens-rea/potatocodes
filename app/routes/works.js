import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {name: 'University of Santo Tomas', img: 'assets/images/works/university-of-santo-tomas.png'}, 
      {name: 'DLSU Publishing House', img: 'assets/images/works/delasalle-publishing-house.png'},
      {name: 'IEEE HNICEM', img: 'assets/images/works/hnicem.png'}
    ];
  }
});
