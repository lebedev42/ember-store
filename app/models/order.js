import DS from 'ember-data';

export default DS.Model.extend({
    customer_name:  DS.attr('string'),
    customer_phone: DS.attr('string'),
    total_price:    DS.attr('number'),

    products: DS.attr(),
});
