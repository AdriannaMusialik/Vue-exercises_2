<template>
    <div class="counter">
        <div class="counter_title">Counter</div>
        <div class="counter_body">
            <div class="counter_result">{{this.$store.state.counter}}</div>
            <div class="counter_buttons">
                <v-btn @click="increment">+</v-btn>
                <v-btn @click="reset">0</v-btn>
                <v-btn @click="decrement">-</v-btn>
            </div>
            <div class="counter_asyncButtons">
                <v-btn @click="asyncIncrement">async +</v-btn>
                <v-btn @click="asyncReset">async 0</v-btn>
                <v-btn @click="asyncDecrement">async -</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    methods: {
        increment () { 
           this.$store.commit('increment');
        },
        decrement () { 
           this.$store.commit('decrement');
        },
        reset () { 
           this.$store.commit('reset');
        },
        asyncIncrement () { 
           this.$store.dispatch('asyncIncrement');
        },
        asyncDecrement () { 
           this.$store.dispatch('asyncDecrement');
        },
        asyncReset () { 
           this.$store.dispatch('asyncReset');
        },
    }
}

</script>
<style>
.counter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.counter_title {
    font-size: 6vh;
    font-weight: bold;
    margin: 20px 0;
}

.counter_body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: lightgrey;
    margin: 40px 0;
    padding: 20px 10px;
    width: 30vw;
}

.counter_result {
    font-size: 4vh;
    margin: 50px 0;
}

.counter_asyncButtons {
    margin: 10px 0;
}

</style>