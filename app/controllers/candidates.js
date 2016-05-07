import Ember from 'ember';
const { Controller, computed } = Ember;

export default Controller.extend({
  top10: computed('candidates', function() {
    return this.get('candidates').toArray().slice(0,9);
  }),

  candidates: computed('model.@each.totalVotes', function() {
    return this.get('model').sortBy('totalVotes').reverse();
  }),

  actions: {
    vote(candidate) {
      let vote = this.store.createRecord('vote', { candidate: candidate });
      vote.save();
    }
  }
});
