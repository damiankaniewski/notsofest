<template>
    <SubHeader></SubHeader>
    <section>
        <div class="main-view">
            <div class="text-box">
                <h1>Skontaktuj się z nami</h1>
                <p></p>
            </div>
        </div>
    </section>
</template>

<script setup>
    import SubHeader from './utils/SubdomainHeader.vue';

</script>

<style lang="scss" scoped>

    .main-view {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    
    .text-box {
        display: flex;
        flex-direction: column;
    }
    
    h1 {
        color: #FD7622;
    }


</style>