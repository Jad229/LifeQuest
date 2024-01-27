import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className="disabled:cursor-not-allowed mt-5 btn w-11/12 mx-auto text-black bg-green-500 transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-green-600 active:bg-green-400"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
