import Ember from 'ember';
import DS from 'ember-data';

const { PromiseArray } = DS;

const {
  computed,
  computed: {
    mapBy
  },
  Service,
  inject: {
    service
  }
} = Ember;

export default Service.extend({
  store: service(),

  all: computed(function() {
    return this.get('store').findAll('candidate');
  }),

  sorted: computed('all.@each.totalVotes', function() {
    let promise = this.get('all')
    .then(candidates => {
      return candidates.sortBy('totalVotes').reverse();
    });

    return PromiseArray.create({
      promise: promise
    });
  }),

  names: mapBy('sorted', 'name')
});
