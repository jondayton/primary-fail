import Model from 'ember-data/model';
import DS from 'ember-data';
const { belongsTo } = DS;

export default Model.extend({
  candidate: belongsTo('candidate')
});
