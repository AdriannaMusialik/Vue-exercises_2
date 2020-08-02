<template>
   <PageWrapper label="Counter" >
        <div class="counter_body">
            <div class="counter_result">{{this.$store.state.counter.counter}}</div>
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
    </PageWrapper>
</template>

<script>
import PageWrapper from "./PageWrapper";

export default {
    name: 'Counter',
    components: {PageWrapper},
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
.counter_body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
}

.counter_result {
    font-size: 4vh;
    margin: 50px 0;
}

.counter_asyncButtons {
    margin: 10px 0;
}

</style>