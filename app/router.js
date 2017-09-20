import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cart');
  this.route('products', { path: '/' });
  this.route('orders');
});

export default Router;
