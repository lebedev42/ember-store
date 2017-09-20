import DS from 'ember-data';

export default DS.Model.extend({
    name:               DS.attr('string'),
    description:        DS.attr('string'),
    img_src:            DS.attr('string'),
    price:              DS.attr('number'),
    available_quantity: DS.attr('number'),
    order_quantity:     DS.attr('number'),
});
