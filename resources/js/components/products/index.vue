<template>
    <div class="container">
            <div class="title">
                <h1 class="text-center">Products List</h1>
                <div class="add"><router-link :to="{ name: 'ProductCreate' }" class="">+</router-link></div>
            </div>
                <table class="table" cellspacing="0">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(product, key) of products" v-bind:key="key">
                            <td>{{ key+1 }}</td>
                            <td><p class="desc">{{ product.name }}</p></td>
                            <td>{{ product.description }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                                <button class="edit "><router-link class="edit" :to="{ name: 'ProductEdit', params: { productId: product.id }}"><i class="fa fa-pencil"></i></router-link></button>
                                <button class="delete " @click="deleteProduct(product.id)"><i class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: {}
            }
        },
        created() {
            this.getProducts();
        },
        methods: {
            getProducts() {
              this.axios.get('http://127.0.0.1:8000/api/products')
                  .then(response => {
                      this.products = response.data;
                  });
            },
            deleteProduct(productId) {
                this.axios
                    .delete(`http://127.0.0.1:8000/api/products/${productId}`)
                    .then(response => {
                        let i = this.products.map(data => data.id).indexOf(productId);
                        this.products.splice(i, 1)
                    });
            }
        }
    }
</script>

<style scoped>

</style>
