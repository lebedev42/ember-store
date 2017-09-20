import DS from 'ember-data';

let Cart = DS.Model.extend({
    count:    DS.attr('number'),
    total:    DS.attr('number'),
    products: DS.hasMany('product'),

    createOrder(params) {
        const adapter = this.store.adapterFor(this.constructor.modelName);
        return adapter.createOrder(this, params);
    }
});

export default Cart;