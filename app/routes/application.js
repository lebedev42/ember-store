import Ember from 'ember';

export default Ember.Route.extend({
    model() {

        let store = this.get('store');
        store.push({
            data: [{
                id: 1,
                type: 'cart',
                attributes: {
                    count: 0,
                    total: 0,
                }
            }]
        });

        return store.peekRecord('cart', 1);
    }
});
