<template lang="">
  <header>
    <div class="container py-3">
      <a-row justify="space-between">
        <a-col>
          <router-link :to="{name: 'home'}">
            <div class="box-logo">
              <img src="@/assets/images/logo.png" alt="">
            </div>
          </router-link>
        </a-col>
        <a-col :span="14">
          <div class="box-search">
            <div class="form-search">
              <input type="search" class="search" name="" id="" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ...">
              <button class="btn-search">
                <img src="@/assets/images/icon-search.png" class="icon-search" alt="">
                Tìm kiếm
              </button>
            </div>
          </div>
        </a-col>
        <a-col :span="3">
          <div class="box-account text-ellipsis">
            <img class="profile-icon" src="@/assets/images/icon-user.png">
            <div class="user-info">
              <span class="title-account">Tài khoản</span>
              <div class="dropdown">
                <div class="user-name">Phan Điện</div>
              </div>
            </div>
          </div>
        </a-col>
        <a-col>
          <router-link :to="{name: 'cart'}">
            <div class="box-cart">
              <div class="position-relative">
                <img class="cart-icon" src="@/assets/images/icon-cart.png">
                <span class="badge">5</span>
              </div>
              <span>Giỏ hàng</span>
            </div>
          </router-link>
        </a-col>
      </a-row>
    </div>
  </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>