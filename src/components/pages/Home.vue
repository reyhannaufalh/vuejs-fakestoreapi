<template lang="">
  <div class="container">
    <div v-if="isLoading">
      <p>Loading data...</p>
    </div>

    <section v-else class="grid grid-cols-12 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        gridCols="col-span-4"
      />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../molecules/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
      isLoading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
