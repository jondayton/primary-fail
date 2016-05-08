import Ember from 'ember';

const {
  inject: {
    service
  },
  Route
} = Ember;

export default Route.extend({
  candidates: service(),

  model() {
    return this.get('candidates.names');
  },

  afterModel() {
    this.transitionTo('candidates');
  }
});
