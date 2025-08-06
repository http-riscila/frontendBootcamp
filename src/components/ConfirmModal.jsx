const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 ${isOpen ? 'block' : 'hidden'}`}
      id="popup-modal"
      tabIndex="-1"
    >
      <div className="relative max-h-full w-full max-w-md p-4">
        <div className="relative m-2 rounded-lg border-2 bg-zinc-500 shadow-sm dark:border-gray-600">
          <button
            className="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-gray-400 text-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={onClose}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="flex flex-col items-center p-4 text-center md:p-5">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
              fill="none"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span className="mb-5 font-normal text-white">{message}</span>
            <div>
              <button
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-sm text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                data-modal-hide="popup-modal"
                onClick={onConfirm}
                type="button"
              >
                Sim, entrar na comunidade
              </button>
              <button
                className="ms-3 rounded-lg bg-gray-800 px-5 py-2.5 font-bold text-sm text-white hover:bg-gray-600 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                data-modal-hide="popup-modal"
                onClick={onClose}
                type="button"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
