<template>
  <form>
    <h1>{{ message }}</h1>
    <p class="logo"></p>
    <p>ボタンが {{ count }} 回押されたよ！</p>
    <footer>
      <button uxp-variant="cta" @click="increment">クリックしてね</button>
      <button type="submit" @click="close">完了</button>
    </footer>
  </form>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Object
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    close() {
      this.dialog.close();
    }
  },
  data() {
    return {
      message: "こんにちは Vue Component の世界!",
      count: 0
    };
  }
};
</script>

<style>
  .logo {
    display: block;
    width: 64px;
    height: 64px;
    background: url("assets/logo.png");
    background-size: contain;
  }
form {
  width: 300px;
}
</style>
