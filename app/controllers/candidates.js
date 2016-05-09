import Ember from 'ember';
const { Controller, computed } = Ember;

export default Controller.extend({

  top20: computed('model', function() {
    return this.get('model').toArray().slice(0,19);
  }),

  actions: {
    vote(candidate) {
      let vote = this.store.createRecord('vote', { candidate: candidate });
      vote.save();
    },

    showAll() {
      this.set('showingAll', true);
    }
  }
});
