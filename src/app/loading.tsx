import Spinner from "./components/ui/spinner/spinner";

export default function Loading() {
  return (
    <div className="flex w-full justify-center items-center h-screen">
      <Spinner />
    </div>
  );
}
