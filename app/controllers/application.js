import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  typedBlocks: [
    {
      letters: "I'm voting for Hillar",
      deletePause: 300,
      backspacePositions: 6
    },
    {
      letters: "Burni",
      addPause: 200,
      deletePause: 100,
      backspacePositions: 4
    },
    {
      letters: "ernie S",
      addPause: 100,
      deletePause: 200,
      backspacePositions: 8
    },
    {
      letters: "Donald J Trump",
      addPause: 100,
      backspacePositions: 0
    },
    {
      letters: ".",
      addPause: 500,
      backspacePositions: 0
    },
    {
      letters: ".",
      addPause: 500,
      backspacePositions: 0
    },
    {
      letters: ".",
      addPause: 500,
      backspacePositions: 0
    },
    {
      letters: "nope.",
      addPause: 500,
      deletePause: 500,
      backspacePositions: 33
    },
    {
      letters: "writing in",
      addPause: 200,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 1000,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 1000,
      backspacePositions: 0
    },
    {
      letters: " .",
      addPause: 1000,
      backspacePositions: 0
    },
  ]
});

// letters, backspacePositions, pause
