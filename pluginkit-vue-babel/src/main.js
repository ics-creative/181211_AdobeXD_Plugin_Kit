import Vue from "vue";
import Hello from "./hello.vue";

/**
 * ダイアログを呼び出す
 */
function createDialog() {
  document.body.innerHTML = `<dialog><div id="container"></div></dialog>`;
  const dialog = document.querySelector("dialog");
  new Vue({
    el: "#container",
    components: { Hello },
    render(h) {
      return h(Hello, { props: { dialog } });
    },
  });
  return dialog;
}

// メニューとして出力する
module.exports = {
  commands: {
    // コマンドが押されたらこの関数を呼び出す
    menuCommand: () => {
      createDialog().showModal();
    },
  },
};
