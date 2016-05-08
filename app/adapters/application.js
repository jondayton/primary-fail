import Ember from 'ember';
import Adapter from 'active-model-adapter';
import config from 'primary-fail/config/environment';

Ember.$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

export default Adapter.extend({
  host: config.APP.apiHost
});
