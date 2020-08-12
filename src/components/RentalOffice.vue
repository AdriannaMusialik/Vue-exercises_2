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
                        <v-btn @click="rentItem(item.id)">Rent</v-btn>
                        <v-btn @click="returnItem(item.id)">Return</v-btn>
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
    async created () {
        await this.$store.dispatch('fetchData');
        this.addItems();
    },

    methods : {
        addItems () {
            this.items = this.$store.state.rentalOffice.items
        },
        async rentItem (itemId) {
            await this.$store.commit('rentItem', itemId);
            this.addItems()
        },
        async returnItem (itemId) {
            await this.$store.commit('returnItem', itemId);
            this.addItems()
        }
    }
    
}
</script>