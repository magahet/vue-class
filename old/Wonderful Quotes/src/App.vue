<template>
    <div class="container">
        <app-header :quote-count="quotes.length" :max-quotes="maxQuotes"></app-header>
        <new-quote @quoteAdded="newQuote"></new-quote>
        <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import AppHeader from './components/Header.vue'

export default {
    data() {
        return {
            quotes: [
                'Just a test quote',
            ],
            maxQuotes: 10,
        }
    },
    methods: {
        newQuote(quote) {
            if (this.quotes.length >= this.maxQuotes) {
                return alert('Please delete Quotes first!')
            }
            this.quotes.push(quote)
        },
        deleteQuote(idx) {
            this.quotes.splice(idx, 1)
        }
    },
    components: {
        AppHeader,
        QuoteGrid,
        NewQuote,
    }
}
</script>

<style>
</style>
