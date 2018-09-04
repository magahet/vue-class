<template>
  <div class="row">
    <quote v-for="(quote, idx) in quotes" :key="idx" @click.native="deleteQuote(idx)">{{ quote }}</quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
  props: ['quotes'],
  components: {
    Quote,
  },
  methods: {
    deleteQuote(idx) {
      this.$emit('quoteDeleted', idx)
    }
  }
}
</script>

<style>

</style>

