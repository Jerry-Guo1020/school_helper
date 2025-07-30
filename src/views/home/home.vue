<template>
    <div class="contanier">
        
        <div class="carousel">
            <Carousel />
        </div>
        <div class="scrollbar">
            <Scrollbar />
        </div>
        <div class="function">
            <Function />
        </div>

        <div class="dynamic-section">
            <CampusDynamic />
        </div>
    </div>
    <Navbar />
</template>

<script setup>
import Carousel from '../../components/home/carousel.vue';
import CampusDynamic from '../../components/home/Dynamic/CampusDynamic.vue';
import Function from '../../components/home/function.vue';
import Scrollbar from '../../components/home/Scrollbar.vue';
import Navbar from '../../components/Navbar/navbar.vue';



</script>

<style scoped>
.contanier {
    width: 100%;
    max-width: 480px;         /* 可根据需要调整为600/900等 */
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: calc(104px + env(safe-area-inset-bottom, 24px));
    box-sizing: border-box;
    padding-left: 12px;    /* 跟下方卡片边距保持一致 */
    padding-right: 12px;
}
.scrollbar {

}

.carousel {
    margin-top: 10px;
    margin-bottom: 10px;
}

.function {

    margin-top: 10px;

}
</style>