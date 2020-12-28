export const setupRulesModal = () => {
  const rulesBtn = document.querySelector(".rules");

  rulesBtn.onclick = (event) => {
    event.stopPropagation();
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "flex";
    document.addEventListener(
      "click",
      () => {
        modalContainer.style.display = "none";
      },
      { once: true }
    );
  };
};
