<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selected = 'blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selected = 'green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selected = 'red'">Load Red Template</button>
                <hr>
                <component :is="selected">Slot Data {{ selected }}</component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                selected: 'blue',
            }
        },
        components: {
            Blue,
            Green,
            Red,
        }
    }
</script>

<style>
</style>
