import Ember from 'ember';
import Adapter from 'active-model-adapter';

Ember.$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

export default Adapter.extend({
  host: 'http://localhost:4001'
});
