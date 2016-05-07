import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
const { hasMany } = DS;

const {
  computed
} = Ember;

export default Model.extend({
  fullName: attr('string'),
  imageUrl: attr('string'),
  descriptionUrl: attr('string'),
  voteCount: attr('number'),

  votes: hasMany('vote'),

  totalVotes: computed('votes.length', 'voteCount', function() {
    return this.get('votes.length') + this.get('voteCount');
  })
});
