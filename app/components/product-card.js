import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['maingrid_item'],

    isDisabled: true,

    actions: {
        addToCart(params) {
            return this.sendAction('addToCart', params);
        }
    }
});
