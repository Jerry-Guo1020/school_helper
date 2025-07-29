<template>
    <div class="contanier">
        <div class="scrollbar">
            <Scrollbar />
        </div>

    </div>
    <Navbar />
</template>

<script setup>
import Scrollbar from '../../components/home/Scrollbar.vue';
import Navbar from '../../components/Navbar/navbar.vue';


</script>

<style scoped>
.contanier {
    background: linear-gradient(180deg,
            #a7ecd3 40%,
            /* 中段过渡柔和 */
            #b4fac8 85%,
            /* 底部与导航栏主色融合 */
            #b4fac8 100%
            /* 导航栏底色！ */
        );
    padding-bottom: calc(104px + env(safe-area-inset-bottom, 24px));
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.scrollbar {
    width: 100%;
}
</style>