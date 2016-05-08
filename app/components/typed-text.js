/* jshint loopfunc:true */

import Ember from 'ember';

const {
  Component,
  RSVP,
  RSVP: {
    Promise
  },
  run: {
    later
  }
} = Ember;

export default Component.extend({
  delay: 0,
  speed: 50,
  blocks: [],

  typedText: '',

  didInsertElement() {
    let delay = this.get('delay');
    this._super(...arguments);
    later(this, 'type', delay);
  },

  type() {
    let blocks = this.get('blocks');
    return blocks.reduce((cur, next)=> {
      return cur.then(()=> this.typeBlock(next));
    }, RSVP.resolve())
    .finally(()=> this.sendAction('finishedTyping'));
  },

  humanSpeed() {
    let speed = this.get('speed');
    return Math.round(Math.random() * (100 - 30)) + speed;
  },

  addLetter(letter) {
    let typedText = this.get('typedText');
    this.set('typedText', typedText + letter);
  },

  removeLetter() {
    let typedText = this.get('typedText');
    this.set('typedText', typedText.slice(0, typedText.length - 1));
  },

  typeLetter(method, letter) {
    let delay = this.humanSpeed();
    return new Promise(resolve => {
      later(this, function() {
        resolve(letter);
        this[method](letter);
      }, delay);
    });
  },

  delayPromise(delay) {
    return new Promise(resolve => {
      later(this, ()=> resolve(), delay);
    });
  },

  typeBlock(block) {
    let { letters, backspacePositions, addPause, deletePause } = block;
    let totalText = letters + this.get('typedText');
    let totalLength = totalText.length;
    let backspaces = totalText.slice(totalLength - backspacePositions, totalLength);

    let promise = this.delayPromise(addPause)
    .then(()=> {
      return letters.split('').reduce((cur, next)=> {
        return cur.then(()=> this.typeLetter('addLetter', next));
      }, RSVP.resolve());
    })
    .then(()=> this.delayPromise(deletePause))
    .then(()=> {
      return backspaces.split('').reduce(cur => {
        return cur.then(()=> this.typeLetter('removeLetter'));
      }, RSVP.resolve());
    });

    return promise;
  }
});
