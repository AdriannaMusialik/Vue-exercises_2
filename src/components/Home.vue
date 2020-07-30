<template>
    <div>
        <NavBar/>
        <router-view class="routerView"/>
    </div>
</template>


<script>
import NavBar from"./NavBar"

export default {
  name: 'Home',
  components: {
      NavBar
    }

}
</script>

<style>
.routerView {
    margin-top: 30px;
}
</style>