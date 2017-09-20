import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    ajax: Ember.inject.service(),

    createOrder(model, params) {
        const url = `${this.host}/orders`
        return this.get('ajax').request(url, { 
            type: 'POST',
            data: params, 
            dataType: 'json',
            contentType : 'application/json'
        });
    }
});
