import Ember from 'ember';

const {
  Route,
  inject: {
    service
  }
} = Ember;

export default Route.extend({
  candidates: service(),

  model() {
    return this.get('candidates.sorted');
  }
});
