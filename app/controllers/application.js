import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  typedBlocks: [
    {
      letters: "I'm voting for Clinto",
      deletePause: 300,
      backspacePositions: 6
    },
    {
      letters: "Hillary Clin",
      addPause: 100,
      deletePause: 200,
      backspacePositions: 12
    },
    {
      letters: "Donald J Trump",
      addPause: 100,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 300,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 300,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 300,
      backspacePositions: 0
    },
    {
      letters: " nope.",
      addPause: 500,
      deletePause: 500,
      backspacePositions: 37
    },
    {
      letters: "writing in",
      addPause: 200,
      deletePause: 200,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 300,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 300,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 300,
      backspacePositions: 0
    }
  ],

  searchedName: 'test',

  // sortedCandidates: computed('model', function() {
  //   let match = this.get('model').find(function(item) {
  //
  //   });
  // }),

  actions: {
    showWriteInput() {
      // this.set('showingWriteInput', true);
    }
  }
});
