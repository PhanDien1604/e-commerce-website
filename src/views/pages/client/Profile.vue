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
      <a-form-item label="Birthday" name="birthday">
        <a-input v-model:value="formState.birthday" />
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
      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formState: {
        account: 'dienpq1604@gmail.com',
        username: 'Phan Quang Điện',
        birthday: '16/04/2001',
        tel: '0963865764',
        email: '',
        note: 'Yêu cái đẹp'
      },
      rules: {

      }
    }
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