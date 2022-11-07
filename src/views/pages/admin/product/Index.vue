<template lang="">
  <a-layout-content>
    <a-button type="primary">
      Add
    </a-button>

    <a-table 
      :dataSource="products.dataSource" 
      :columns="products.columns" 
      :pagination="pagination"
      @change="handleTableChange"
      :style="{marginTop: '1rem'}"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'code'">
          <span style="color: #1890ff">Code</span>
        </template>
      </template>
      <template
        #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
      >
        <div style="padding: 8px">
          <a-input
            ref="searchInput"
            :placeholder="`Search ${column.dataIndex}`"
            :value="selectedKeys[0]"
            style="width: 188px; margin-bottom: 8px; display: block"
            @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
            @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
          />
          <a-button
            type="primary"
            size="small"
            style="width: 90px; margin-right: 8px"
            @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
          >
            <template #icon><SearchOutlined /></template>
            Search
          </a-button>
          <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
            Reset
          </a-button>
        </div>
      </template>
      <template #customFilterIcon="{ filtered, column }">
        <template v-if="column.key === 'name' || column.key === 'code'">
          <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
        </template>
        <template v-else>
          <FilterFilled :style="{ color: filtered ? '#108ee9' : undefined }" />
        </template>
      </template>

      <template #bodyCell="{ text, column, record }">
        <span v-if="searchText && searchedColumn === column.dataIndex">
          <template
            v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
          >
            <mark
              v-if="fragment.toLowerCase() === searchText.toLowerCase()"
              :key="i"
              class="highlight"
            >
              {{ fragment }}
            </mark>
            <template v-else>{{ fragment }}</template>
          </template>
        </span>
        <template v-else-if="column.key === 'action'">
          <span>
            <router-link :to="{name: 'admin.product'}">Detail</router-link>
          </span>
        </template>
        <template v-else-if="column.key === 'image'">
          <span>
            <div class="img-product">
              <img :src="'/src/assets/images/products/'+ text" alt="">
            </div>
          </span>
        </template>
        <template v-else-if="column.key === 'status'">
          <span>
            <a-tag
              :color="text === 'on' ? 'volcano' : 'green'"
            >
              {{ text.toUpperCase() }}
            </a-tag>
          </span>
        </template>
      </template>
    </a-table>
  </a-layout-content>
</template>
<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import { SmileOutlined, DownOutlined ,SearchOutlined, FilterFilled} from '@ant-design/icons-vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  created() {
    this.setSelectedKeys(['product'])
    this.getDataSourceProducts()
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapMutations(['setSelectedKeys']),
    ...mapActions(['getDataSourceProducts'])
  },
  components: {
    SmileOutlined,
    DownOutlined,
    SearchOutlined,
    FilterFilled
  },
  setup() {
    const pagination = { 
      defaultPageSize: 2, 
      showSizeChanger: false, 
    }
    const state = reactive({
      searchText: '',
      searchedColumn: '',
    });
    const searchInput = ref();
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      state.searchText = selectedKeys[0];
      state.searchedColumn = dataIndex;
    };

    const handleReset = clearFilters => {
      clearFilters({
        confirm: true,
      });
      state.searchText = '';
    };

    return {
      pagination,
      handleSearch,
      handleReset,
      searchInput,
      ...toRefs(state),
    };
  },
})
</script>
<style>
.ant-layout-content {
  margin: calc(24px + 64px) 16px;
  padding: 24px;
  background-color: #fff;
  height: 2000px;
}
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
.img-product {
  width: 80px;
  height: 50px;
  background: #ccc;
  overflow: hidden;
}
.img-product img {
  width: 100%;
}
</style>