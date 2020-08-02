<template>
    <PageWrapper label="Rental Office">
       <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Category</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.status ? "available" : "unavailable"}}</td>
                    <td>
                        <v-btn>Rent</v-btn>
                        <v-btn>Return</v-btn>
                    </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </PageWrapper>
</template>


<script>
import PageWrapper from "./PageWrapper";

export default {
    name: 'RentalOffice',
    components: {PageWrapper},
    data () {
        return {
            items: {},
        }
    },
    created () {
        this.$store.dispatch('fetchData');
        this.addItems();
        console.log(this.items)    
    },

    methods : {
        addItems () {
            this.items = this.$store.state.rentalOffice.items
        }
    }
    
}
</script>