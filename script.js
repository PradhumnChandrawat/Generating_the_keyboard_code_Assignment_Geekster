const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
const keyNameElement = document.querySelector("#key-name");
// const keyValue = document.querySelector('.spn');

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  let { keyPressed, keyCode } = getKeyPressedAndKeyCode(e);
  //   console.log("keys: " + keyPressed);
  keyNameElement.innerHTML = keyPressed;
  let key_Code = this.document.querySelector("#key-code");
  key_Code.innerText = keyCode;
});

function getKeyPressedAndKeyCode(e) {
  let keyPressed = "";
  let keycode = null;
  if (e.ctrlKey && e.altKey && e.shiftKey) {
    keyPressed = `Ctrl + Alt + Shift`;
    if (
      e.key.toLocaleLowerCase() !== "alt" &&
      e.key.toLocaleLowerCase() !== "control" &&
      e.key.toLocaleLowerCase() !== "shift"
    ) {
      keyPressed += ` + ${e.key}`;
    }
  } else if (e.ctrlKey && e.altKey) {
    keyPressed = `Ctrl + Alt`;
    if (
      e.key.toLocaleLowerCase() !== "alt" &&
      e.key.toLocaleLowerCase() !== "control"
    ) {
      keyPressed += ` + ${e.key}`;
    }
  } else if (e.altKey && e.shiftKey) {
    keyPressed = `Alt + Shift`;
    if (
      e.key.toLocaleLowerCase() !== "alt" &&
      e.key.toLocaleLowerCase() !== "shift"
    ) {
      keyPressed += ` + ${e.key}`;
    }
  } else if (e.ctrlKey && e.shiftKey) {
    keyPressed = `Ctrl + Shift`;
    if (
      e.key.toLocaleLowerCase() !== "control" &&
      e.key.toLocaleLowerCase() !== "shift"
    ) {
      keyPressed += ` + ${e.key}`;
    }
  } else if (e.ctrlKey || e.altKey) {
    if (e.ctrlKey) {
      keyPressed = `Ctrl`;
    } else {
      keyPressed = `Alt`;
    }
    if (
      e.key.toLocaleLowerCase() !== "alt" &&
      e.key.toLocaleLowerCase() !== "control"
    ) {
      keyPressed += ` + ${e.key}`;
    }
  } else if (e.shiftKey) {
    keyPressed = `Shift`;
    if (e.key.toLocaleLowerCase() !== "shift") {
      keyPressed += ` + ${e.key}`;
    }
  } else {
    keyPressed = e.key;
  }
  keycode = e.keyCode;
  return { keyPressed: keyPressed, keyCode: keycode };
}
