import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      className="disabled:cursor-not-allowed mt-5 btn text-black bg-green-500"
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
