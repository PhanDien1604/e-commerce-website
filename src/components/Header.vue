<template lang="">
  <a-layout-header
    class="header"
    :style="{width: !collapsed ? 'calc(100% - 240px)' : 'calc(100% - 80px)'}"
  >
    <a-row type="flex" justify="space-between">
      <a-col>
        <a-row>
          <a-col>
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="changeCollapsed"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="changeCollapsed"
            />
          </a-col>
          <a-col>
            <router-link :to="{ name: 'admin.home' }" class="btn-link">
              Home
            </router-link>
          </a-col>
          <a-col>
            <router-link :to="{ name: 'admin.contact' }" class="btn-link">
              Contact
            </router-link>
          </a-col>
        </a-row>
      </a-col>
      <a-col>
        <div class="box-logo">
          <img src="@/assets/images/logo.png" alt="">
          <span class="fw-bold">PTIT</span>
        </div>
      </a-col>
      <a-col>
        <a-row>
          <a-col>
            <a-badge count="5" :style="{right: '5px'}">
              <WechatOutlined class="trigger mx-2" />
            </a-badge>
          </a-col>
          <a-col>
            <a-badge count="5" :style="{right: '5px'}" >
              <BellOutlined class="trigger mx-2" />
            </a-badge>
          </a-col>
          <a-col>
            <ExportOutlined class="trigger mx-2"/>
          </a-col>
          <a-col>
            <FullscreenOutlined class="trigger" 
              :style="{margin: '0 8px', display: !fullscreen ? '' : 'none'}" 
              @click="changeScreen" 
            />
            <FullscreenExitOutlined class="trigger" 
              :style="{margin: '0 8px', display: fullscreen ? '' : 'none'}" 
              @click="changeScreen" 
            />
          </a-col>
          <a-col>
            <AppstoreFilled class="trigger mx-2" @click="showDrawer" />
          </a-col>
        </a-row>
      </a-col>
    </a-row>

    <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="Cài đặt"
      placement="right"
      @after-visible-change="afterVisibleChange"
    >
      <template #extra>
        <a-switch :checked="themed ==='dark'" @change="changeThemed" :style="{marginLeft: '16px'}"/>
      </template>

    </a-drawer>
  </a-layout-header>
</template>
<script>
import {
  MenuUnfoldOutlined, WechatOutlined, BellOutlined, ExportOutlined, FullscreenOutlined, FullscreenExitOutlined,
  MenuFoldOutlined, WhatsAppOutlined, AppstoreFilled
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import {mapGetters, mapMutations, mapActions} from 'vuex';

export default defineComponent({
  components: {
    MenuUnfoldOutlined, 
    MenuFoldOutlined,
    WechatOutlined,
    BellOutlined,
    ExportOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    WhatsAppOutlined,
    AppstoreFilled
  },
  computed: {
    ...mapGetters(['collapsed', 'themed'])
  },
  methods: {
    ...mapActions(['changeCollapsed', 'changeThemed'])
  },
  setup() {
    const visible = ref(false);

    const showDrawer = () => {
      visible.value = true;
    };

    return {
      visible,
      showDrawer,
    };
  }
})
</script>
<style lang="scss">
.header {
  background: #fff !important;
  padding: 0 24px !important;
  position: fixed;
  transition: all 0.2s;
  box-shadow: 0 5px 10px -10px gray;
  z-index: 1000;
  right: 0;
}

.box-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-logo img{
  width: 25px;
  margin-right: 8px;
}
.header {
  .btn-link {
    margin-left: 16px;
    color: #000000d9 !important;

    &:hover {
      color: #1890ff !important;
    }
  }

  .router-link-exact-active {
    color: #1890ff !important;
  }
}
</style>