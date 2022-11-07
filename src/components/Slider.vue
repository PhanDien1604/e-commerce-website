<template lang="">
  <a-layout-sider 
    :style="{overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0, padding: '8px'}"
    v-model:collapsed="collapsed" 
    :trigger="null" 
    collapsible
    :theme="themed"
    :class="{slider: !collapsed}"
  >
  <router-link :to="{name: 'admin.account'}">
    <div class="boxAvatar">
        <a-avatar :size="40">
          <template #icon>
            <img src="@/assets/images/logo.png" alt="">
          </template>
        </a-avatar>
        <span :class="{txtUsername:true, txtUsernameCollapsed:collapsed}" 
          :style="{marginLeft: '8px', color: themed === 'light' ? 'black' : '#fff'}">
          Phan Quang Điện
        </span>
    </div>
  </router-link>
  
    <a-menu v-model:selectedKeys="selectedKeys" :theme="themed" mode="inline">
      <a-menu-item key="home">
        <router-link :to="{ name: 'admin.home' }">
          <DashboardOutlined />
          <span>Dashboard</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="product">
        <router-link :to="{ name: 'admin.product' }">
          <SkinOutlined />
          <span>Product</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="customer">
        <router-link :to="{ name: 'admin.customer' }">
          <TeamOutlined />
          <span>Customer</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="seller">
        <router-link :to="{ name: 'admin.seller' }">
          <UserOutlined />
          <span>Seller</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="order">
        <router-link :to="{ name: 'admin.order' }">
          <ShoppingOutlined />
          <span>Order</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="promotion">
        <router-link :to="{ name: 'admin.promotion' }">
          <TrophyOutlined />
          <span>Promotion</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="warehouse">
        <router-link :to="{ name: 'admin.warehouse' }">
          <ShopOutlined />
          <span>Warehouse</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="statistical">
        <router-link :to="{ name: 'admin.statistical' }">
          <BarChartOutlined />
          <span>Statistical</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { ShopOutlined, DashboardOutlined, BarChartOutlined, ShoppingOutlined,
  TrophyOutlined, UserOutlined, TeamOutlined,SkinOutlined } 
from '@ant-design/icons-vue';
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  components: {
    DashboardOutlined,
    ShopOutlined,
    BarChartOutlined,
    ShoppingOutlined,
    SkinOutlined,
    TrophyOutlined,
    UserOutlined,
    TeamOutlined
  },
  computed: {
    ...mapGetters(['collapsed', 'themed', 'selectedKeys'])
  },
}
</script>
<style>
.slider::-webkit-scrollbar {
  display: none;
}

.slider {
  -ms-overflow-style: none; 
  scrollbar-width: none;
}
.boxAvatar {
  margin: 16px 0px;
  margin-left: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;  
}
.txtUsername{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: calc(100% - 48px);
  transition: 0.3s
}
.txtUsernameCollapsed {
  opacity: 0 !important;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
.ant-menu-item, .ant-menu-submenu-title {
  border-radius: 4px;
  padding: 0 24px !important;
}

.ant-tooltip .anticon {
  margin-right: 8px;
}
.ant-menu-vertical.ant-menu-sub {
  margin-left: 8px !important;
}
.ant-layout-sider-children .ant-menu.ant-menu-inline-collapsed {
  width: 100% !important;
}
.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
  border: none !important;
}

.slider {
  min-width: 240px !important;
  max-width: 240px !important;
  width: 240px !important;
  flex: 0 0 240px !important;
}
</style>