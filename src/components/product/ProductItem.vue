<template>
    <li>
        <div class="photo">
            <slot name="image"></slot>
        </div>
        <div class="info">
            <p><slot name="title"></slot></p>
            <p><slot name="price"></slot></p>
            <p class="rating">
                <slot name="rating"></slot>
            </p>
            <slot name="actions"></slot>
            <slot name="inventory"></slot>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'ProductItem'
    }
</script>

<style lang="scss" scoped>

</style>