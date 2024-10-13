<template>
  <router-link
    :to="`products/${this.product.id}`"
    class="p-6 border rounded-lg shadow-sm"
    :class="gridCols"
  >
    <div className="w-full h-56">
      <img
        className="h-full mx-auto"
        :src="this.product.image"
        :alt="this.product.title"
      />
    </div>
    <div className="pt-6">
      <p className="text-sm text-neutral-300">{{ this.product.category }}</p>

      <h1
        className="block my-3 text-lg font-semibold leading-tight hover:underline"
      >
        {{ this.product.title }}
      </h1>

      <div className="line-clamp-3">
        <p>{{ this.product.description }}</p>
      </div>

      <div className="flex items-center justify-between gap-4 mt-4">
        <p className="text-2xl font-extrabold leading-tight">
          ${{ this.product.price }}
        </p>

        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    gridCols: {
      type: String,
      default: "col-span-4",
    },
  },
};
</script>
