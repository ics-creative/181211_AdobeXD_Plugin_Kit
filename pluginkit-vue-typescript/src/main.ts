//  temporary stubs required for Vue.
//  These will not be required as soon as the XD environment provides setTimeout/clearTimeout
global.setTimeout = (fn) => fn();
global.clearTimeout = () => {};

// ES Modules 方式で読み込みたいが、
// 上述の setTimeout の互換性のため
// CommonJS 方式で読み込むしかない
const Vue = (require("vue") as any).default;
const Hello = (require("./Hello.vue") as any).default;

/**
 * ダイアログを呼び出す
 */
function createDialog():HTMLDialogElement {
  document.body.innerHTML = `<dialog><div class="container"></div></dialog>`;
  const dialog = document.querySelector("dialog");
  const container = document.querySelector(".container");
  new Vue({
    el: container,
    components: { Hello },
    render(h) {
      return h(Hello, { props: { dialog } });
    }
  });
  return dialog;
}


// メニューとして出力する
module.exports = {
  commands: {
    // コマンドが押されたらこの関数を呼び出す
    menuCommand: () => {
      createDialog().showModal();
    }
  }
};
