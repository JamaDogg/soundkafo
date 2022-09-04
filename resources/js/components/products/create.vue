<template>
    <div class="container">
        <div class="title">
                <h1 class="text-center">Create Product</h1>
            </div>
        <div class="form">
                <form>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Description:</label>
                        <textarea type="text" rows="5" class="form-control" v-model="product.description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Price:</label>
                        <input type="number" class="form-control" v-model="product.price">
                    </div>
                    <button type="button" class="btn btn-primary" @click="createProduct()">Create</button>
                </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: {}
            }
        },
        methods: {
            createProduct() {
                this.axios.post('http://127.0.0.1:8000/api/products', this.product)
                    .then(response => (
                        this.$router.push({ name: 'ProductIndex' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
