<template>
<div class="navBar">
    <router-link to="/" class="routerLink routerLink_home">
        <v-btn class="button button_home">Home</v-btn>
    </router-link>
    <router-link to="/Counter" class="routerLink routerLink_counter">
        <v-btn class="button button_counter">Counter</v-btn>
    </router-link>
    <router-link to="/RentalOffice" class="routerLink routerLink_rentalOffice">
        <v-btn class="button button_rentalOffice">Rental Office</v-btn>
    </router-link>
    <v-btn class="button button_button4">Button 4</v-btn>
    <v-btn class="button button_button5">Button 5</v-btn>
</div>
</template>

<style>
.navBar {
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;
}

.routerLink {
    text-decoration: none;
}

.button {
    margin-right: 10px;
}
</style>