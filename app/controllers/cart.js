import Ember from 'ember';

export default Ember.Controller.extend({

    isFilled: Ember.computed('model.count', function() {
        return this.get('model.count') > 0;
    }),

    actions: {
        createOrder(customer) {
            let {customer_name, customer_phone} = customer.getProperties('customer_name', 'customer_phone');
            let self = this;

            this.get('model.products')
                .then(products => {
                    let order_products = [];
                    products.toArray().forEach(function(product) {
                        order_products.pushObject({
                            id:       product.get('id'),
                            quantity: product.get('order_quantity')
                        })
                    })
                    let data = {
                        customer_name:  customer_name,
                        customer_phone: customer_phone,
                        products:       order_products,
                        total_price:    self.get('model.total'),                        
                    };
                    return data;
                })
                .then(data => {
                    this.model.createOrder(data)
                        .then(response => {
                            data.products.forEach(function(product) {
                                self.get('store').find('product', product.id).then(product => {
                                    product.set('order_quantity', 0);
                                    self.get('model.products').removeObject(product);                                    
                                })
                            })
                            this.model.set('count', 0);
                            this.model.set('total', 0);
                            this.transitionToRoute('products');
                            console.log(response.message)
                        })
                        .catch(error => {
                            error.payload.errors.forEach(function(error) {
                                console.error(error);                                
                            })
                        });
                })
        },

        clearCart() {
            let cart = this.model;
            cart.get('products')
                .then((products) => {
                    products.toArray().forEach(function(product) {
                        product.set('available_quantity', product.get('available_quantity') + product.get('order_quantity'));
                        product.set('order_quantity', 0);
                        cart.get('products').removeObject(product);
                    })
                    cart.set('count', 0);
                    cart.set('total', 0);
                })
        },
    }
});
