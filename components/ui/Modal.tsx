
type ModalProps = {
  title: string;
  content: JSX.Element | JSX.Element[];
  onClose: any;
  onConfirm?: any;
}

function Modal({ title, content, onClose, onConfirm }: ModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 text-black">
      <div className="flex flex-col gap-5 bg-white p-6 rounded-lg">
        <div>
          <h2 className="text-black font-bold text-2xl">{title}</h2>
        </div>
        <div>{content}</div>
        <div className="flex justify-center items-center gap-5 font-bold">
          {onConfirm && (
            <button
              className="py-2 px-3 bg-green-500 rounded-lg mr-2"
              onClick={onConfirm}
            >
              Confirm
            </button>
          )}
          <button className="py-2 px-3 bg-red-500 rounded-lg" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal