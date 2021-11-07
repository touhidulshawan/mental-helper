import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const ClickToVerify = () => {
  const { emailVerification } = useAuth();

  const sendVerificationEmail = async () => {
    const isSendEmail = await emailVerification();

    if (isSendEmail) {
      toast.success("Verification email sent. Please check your mailbox");
    } else {
      toast.error("Something wrong!! Please try again.");
    }
  };

  return (
    <>
      <span
        onClick={sendVerificationEmail}
        className="cursor-pointer px-1 underline text-purple-500"
      >
        click to verify
      </span>
    </>
  );
};
export default ClickToVerify;
