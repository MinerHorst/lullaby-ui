import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      visibleToasts={6}
      expand={true}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "w-full rounded-md py-[1.2em] px-4 flex items-center", //general styling
          title: "text-white text-sm",
          description: "text-xs",
          loader: "bg-blue-400",
          closeButton:
            "text-xs px-2 py-2 h-fit border rounded-md border-[rgb(55,55,55)] text-white",
          cancelButton:
            "text-xs px-2 py-2 h-fit border rounded-md border-[rgb(55,55,55)] text-white",
          actionButton:
            "text-xs px-2 py-2 h-fit border rounded-md border-[rgb(55,55,55)] text-white",
          success:
            "px-2 gap-2 text-white border-[0.3px] border-green-400 px-2 gap-2",
          error:
            "px-2 gap-2 text-white border-[0.3px] border-red-400 px-2 gap-2",
          info: "px-2 gap-2 text-white border-[0.3px] border-blue-400 px-2 gap-2",
          warning:
            "px-2 gap-2 text-white border-[0.3px] border-red-400 px-2 gap-2",
          loading: "px-2 gap-2",
          default: "bg-[rgb(17,18,26)] border-[rgb(55,55,55)] text-white",
          content: "",
          icon: "",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
