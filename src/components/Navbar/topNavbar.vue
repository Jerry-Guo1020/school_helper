<template>
<div class="card">
    <div class="title">
        <span>{{ title }}</span>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Default Title'
    }
});
</script>

<style scoped>
.card {
  width: 100%;
  background: #fff;
  height: 50px;  
  box-shadow: 0 4px 20px #0001;
  box-sizing: border-box;
}

.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: 900;
}
</style>