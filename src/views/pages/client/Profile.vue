<template lang="">
  <div class="profile mt-4">
    <h3>Hồ sơ cá nhân</h3>
    <a-form
      :model="formState"
      name="basic"
      autocomplete="off"
      :rules="rules"
      @finish="onFinish"
      class="box-info rounded-3"
    >
      <a-form-item label="Account" name="account">
        <a-input v-model:value="formState.account" disabled />
      </a-form-item>
      <a-form-item label="Username" name="username">
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item label="Tel" name="tel">
        <a-input v-model:value="formState.tel" />
      </a-form-item>
      <a-form-item label="Email" name="email">
        <a-input v-model:value="formState.email" />
      </a-form-item>
      <a-form-item label="Note" name="note">
        <a-textarea v-model:value="formState.note" placeholder="Note" :rows="4" />
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  async created() {
    await this.getProfile(1)
    this.formState.account = this.userProfile.user.phone
    this.formState.username = this.userProfile.username
    this.formState.tel = this.userProfile.user.phone
    this.formState.email = this.userProfile.user.email
    this.formState.note = this.userProfile.note
  },
  data() {
    return {
      formState: {
        account: '',
        username: '',
        tel: '',
        email: '',
        note: ''
      },
      rules: {

      }
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    ...mapActions(['getProfile'])
  },
}
</script>
<style lang="scss">
  .profile {
    width: 700px;
    margin: 0 auto;
  }
  .box-info {
    background: #fff;
    padding: 32px;

    .ant-form-item-label {
      width: 80px;
    }
  }
</style>