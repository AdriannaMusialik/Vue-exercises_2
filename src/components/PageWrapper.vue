<template>
    <div class="body">
        <div class="title">
            <label> {{ label }} </label>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['label', "body"],
}
</script>

<style>
.body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.title {
    font-size: 6vh;
    font-weight: bold;
    margin: 20px 0;
}

.content {
    background-color: lightgrey;
    padding: 2vh;
    margin: 2vh;
}
</style>