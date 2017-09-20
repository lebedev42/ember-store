import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addToCart(product_id) {
            let cart = this.get('store').peekRecord('cart', 1),
                cart_count = cart.get('count');

            this.get('store').findRecord('product', product_id).then((product) => {
                if (product.get('available_quantity') > 0) {
                    cart.get('products').pushObject(product);
                
                    product.get('order_quantity') ? product.set('order_quantity', product.get('order_quantity') + 1) : product.set('order_quantity', 1);

                    if (cart.get('total') === 0) {
                        cart.set('total', product.get('price') );
                    } else {
                        cart.set('total', cart.get('total') + product.get('price') );
                    }

                    cart.set('count', cart_count + 1);
                    product.set('available_quantity', product.get('available_quantity') - 1);
                } else {
                    return
                }
            })            
        }
    }
});