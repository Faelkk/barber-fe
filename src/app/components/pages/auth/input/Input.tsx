import { cn } from "@/functions/cn";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { placeholder, className, disabled, id, name, error, ...props },
  ref
) {
  return (
    <div className="relative w-full">
      <input
        ref={ref}
        name={name}
        id={id}
        {...props}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "w-full max-w-full pp:w-[18.75rem] md:w-[28.75rem] text-black-0 bg-gray-0 rounded-[3px] p-3 font-roboto placeholder:text-black-0 focus:bg-gray-300  focus:border-black-600 transition-colors mt-[16px] border border-[#bbbb] placeholder:font-poppins placeholder:text-Seashell-950",
          error && "border-red-500 focus:border-red-500",
          className
        )}
      />

      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-500">
          <span className=" text-xs">{error}</span>
        </div>
      )}
    </div>
  );
});

export default Input;
