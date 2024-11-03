export const OpenModalButton = ({
  setModalTitle,
  setmodalText,
  buttonText,
  className,
  modalText,
  modalTitle,
  setModalIsOpen,
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        setModalTitle(modalTitle);
        setmodalText(modalText);
        document.body.classList.add('overflow-hidden');
        setModalIsOpen(true);
      }}
    >
      {buttonText}
    </button>
  );
};
