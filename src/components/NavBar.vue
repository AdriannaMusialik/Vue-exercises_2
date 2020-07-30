<template>
<div class="navBar">
    <router-link to="/Counter" class="routerLink routerLink_counter">
        <v-btn class="button button_button1">Counter</v-btn>
    </router-link>
    <v-btn class="button button_button2">Button 2</v-btn>
    <v-btn class="button button_button3">Button 3</v-btn>
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