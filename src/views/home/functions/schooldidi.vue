<template>
    <div class="top">
        <TopNavbar title="校园滴滴" />
    </div>
    <div class="contanier">
        <div class="topphoto">
        </div>

        <div class="fab" @click="onPublish">
            <AddButtom>
                
            </AddButtom>
        </div>
    </div>
</template>

<script setup>
import AddButtom from '../../../components/home/functions/nimingtougao/addButtom.vue';
import TopNavbar from '../../../components/Navbar/topNavbar.vue';

function onPublish() {
  alert('点击发布！')
}
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
}

.topphoto {
    background-color: #fff;
    width: 100%;
    height: 200px;
    border-radius: 12px;
    margin: 15px auto;
}


.fab {
  position: fixed;
  right: 44rpx;
  bottom: 268rpx;
  width: 102rpx;
  height: 102rpx;
  border-radius: 50%;
  background: radial-gradient(circle at 65% 28%, #ffb570 60%, #ff8247 100%);
  box-shadow: 0 8rpx 28rpx rgba(255,130,71,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  cursor: pointer;
  transition: box-shadow .18s, transform .13s;
  animation: fabGlow 2.5s infinite alternate cubic-bezier(.85,0,.13,1);
}
.fab:active {
  box-shadow: 0 5rpx 17rpx rgba(255,130,71,0.27);
  transform: scale(.97);
}
.fab-icon {
  font-size: 58rpx;
  color: #fff;
  filter: drop-shadow(0 2rpx 12rpx #ffb57077);
}

</style>