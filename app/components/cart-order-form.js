import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations, {

    displayErrors: false,

    validations: {
        'customer_name': {
            presence: true,
            length: { minimum: 2 }
        },
        'customer_phone': {
            presence: true,
            numericality: true
        }
    },

    actions: {
        createOrder() {
            let self = this;    
            this.validate().then(function() {
                if (self.get('isValid')) {
                    self.set('displayErrors', false);
                    return self.sendAction('createOrder', self);                        
                }
            }, 
            function() {
                self.set('displayErrors', true);
            });
        },
        clearCart() {
            return this.sendAction('clearCart');
        }
    }
});
