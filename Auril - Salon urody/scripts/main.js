//GIFT MODAL

const wrap = document.querySelector(".wrap-modal");
const btnGift = document.querySelector(".gbm");
const div = document.querySelector(".gift-modal");
const btnClose = document.querySelector(".fa-window-close");

const modalEffect = () => {
  div.classList.add("activeFlex");
  wrap.classList.add("wrap--blurEffect");
};

const modalClose = () => {
  div.classList.remove("activeFlex");
  wrap.classList.remove("wrap--blurEffect");
};

btnGift.addEventListener("click", modalEffect);
btnClose.addEventListener("click", modalClose);
