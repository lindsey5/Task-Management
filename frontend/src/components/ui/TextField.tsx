import { cn } from "../../utils/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  registration?: any;
  icon?: React.ReactNode;
};

export default function TextField({
  label,
  type = "text",
  className,
  placeholder,
  disabled,
  error,
  registration,
  icon,
  onChange,
  ...props
}: InputProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // run react-hook-form onChange if exists
        if (registration?.onChange) registration.onChange(e);

        // run custom onChange if exists
        if (onChange) onChange(e);
    };

    return (
        <div className={cn("w-full flex flex-col gap-1", className)}>
            {label && (
                <label className="text-xs xl:text-sm text-primary font-medium">
                {label}
                </label>
            )}

            <div className="relative w-full">
                <input
                {...registration}
                {...props}
                disabled={disabled}
                placeholder={placeholder}
                onChange={handleChange}
                className={cn(
                    "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-gray-900",
                    icon && "pl-10",
                    error &&  "border-red-500 focus:border-red-500"
                )}
                />

                {icon && (
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    {icon}
                </div>
                )}

            </div>

            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}