<template>
    <div class="top">
        <TopNavbar title="更多" />
    </div>
    <div class="contanier">
        <div class="carousrel">
            <Carousel />
        </div>
        <div class="content">
            <SectionCard />
        </div>
    </div>
</template>

<script setup>
import Carousel from '../../../components/home/functions/more/carousel.vue';
import SectionCard from '../../../components/home/functions/more/sectionCard.vue';
import TopNavbar from '../../../components/Navbar/topNavbar.vue';
</script>

<style scoped>
.contanier {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: calc(124px + env(safe-area-inset-bottom, 24px));
}

.carousrel {
    margin-top: 25px;
}


</style>