import Link from "next/link";

type ModalProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Modal({ title, children }: ModalProps) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 text-black">
      <div className="flex flex-col gap-5 bg-white p-6 rounded-lg w-96">
        <div>
          <h2 className="text-black font-bold text-2xl">{title}</h2>
        </div>
        <div>{children}</div>
        <div className="flex justify-center items-center gap-5 font-bold">
          <Link href="/" className="py-2 px-3 bg-green-500 rounded-lg mr-2">
            Confirm
          </Link>

          <Link href="/" className="py-2 px-3 bg-red-500 rounded-lg">
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}
