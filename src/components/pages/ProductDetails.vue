<template>
  <div v-if="isLoading" class="max-w-3xl mx-auto">
    <p>Loading...</p>
  </div>
  <div class="flex max-w-3xl gap-6 pt-6 pb-8 mx-auto">
    <div class="object-cover w-full">
      <img
        class="w-full h-full mx-auto"
        :src="product?.image"
        :alt="product?.title"
      />
    </div>
    <div class="pt-6">
      <p class="text-sm text-neutral-500">{{ product?.category }}</p>

      <h1
        class="block my-3 text-lg font-semibold leading-tight hover:underline"
      >
        {{ product?.title }}
      </h1>

      <div>
        <p>{{ product?.description }}</p>
      </div>

      <div class="flex items-center justify-between gap-4 mt-4">
        <p class="text-2xl font-extrabold leading-tiht">
          ${{ product?.price }}g
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: null,
      isLoading: true,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      this.product = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
