<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Card',
    components: {},
    created() {
        // You can perform any setup needed here
    }
}
</script>

<style lang="scss" scoped>
.card {
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 100%;
    width: 70%;
}
</style>
