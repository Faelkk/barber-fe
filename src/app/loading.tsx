import clsx from "clsx";
import Spinner from "./components/ui/spinner/spinner";

export default function Loading({ hScreen = "h-screen" }) {
  return (
    <div className={clsx("flex w-full justify-center items-center ", hScreen)}>
      <Spinner />
    </div>
  );
}
