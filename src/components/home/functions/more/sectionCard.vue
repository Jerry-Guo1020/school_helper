<template>
  <div class="function-section-list">
    <div
      v-for="section in functionSections"
      :key="section.title"
      class="function-section"
    >
      <div class="fun-title">{{ section.title }}</div>
      <div class="details">
        <div
          v-for="item in section.Functions"
          :key="item.path"
          class="function-item"
          @click="go(item.path)"
        >
          <img class="icon" :src="item.icon" />
          <span class="label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { functionSections } from '../../../../data/home/functionListDetails/more/moreList'
const router = useRouter()
function go(path) {
  router.push(path)
}
</script>

<style scoped>
.function-section-list {
  width: 100%;
  padding: 2rem 0 0 0;
  min-height: 100vh;
}

.function-section {
  background: #fff;
  border-radius: 1.1rem;
  box-shadow: 0 0.22rem 1.5rem #0001;
  margin: 0 auto 1.3rem auto;
  padding: 1.3rem 1.3rem 1.3rem 1.3rem;
}

.fun-title {
  font-weight: bold;
  font-size: 1.23rem;
  text-align: left;
  margin-bottom: 1.1rem;
  letter-spacing: 0.05rem;
}

.details {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.3rem 0;
  justify-items: center;
  align-items: center;
}

.function-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 4.2rem;
  min-height: 4.2rem;
  transition: transform 0.1s;
}

.function-item:hover {
  transform: translateY(-0.12rem) scale(1.05);
}

.icon {
  width: 2.7rem;
  height: 2.7rem;
  margin-bottom: 0.7rem;
  object-fit: contain;
}

.label {
  font-size: 1rem;
  color: #8d8d8d;
  text-align: center;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 0;
}

/* 小屏更紧凑 */
@media (max-width: 376px) {
  .function-section {
    padding: 0.9rem 0.7rem 0.9rem 0.7rem;
  }
  .icon {
    width: 2.1rem;
    height: 2.1rem;
  }
  .details {
    gap: 0.7rem 0;
    grid-template-columns: repeat(3, 1fr);
  }
}

</style>
