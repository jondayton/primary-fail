import Ember from 'ember';
const { Controller, computed } = Ember;

export default Controller.extend({

  top10: computed('model', function() {
    return this.get('model').toArray().slice(0,9);
  }),

  actions: {
    vote(candidate) {
      let vote = this.store.createRecord('vote', { candidate: candidate });
      vote.save();
    }
  }
});
