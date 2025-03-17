import { ReactNode } from "react";

type Status = 'success' | 'error' | 'warning' | 'info';

type ToastProps = {
  title: string;
  subtitle: string;
  status: Status;
  message: string;
  icon?: ReactNode;
}

const statusColorMap: Record<Status, string> = {
  success: "bg-green-500",
  error: "bg-rose-500",
  warning: "bg-amber-500",
  info: "bg-blue-500",
};

const Toast = ({ title, message, subtitle, status }: ToastProps) => {
  const colorClass = statusColorMap[status];
  const truncatedTitle = title.length > 30 ? title.slice(0, 30) + "" : title;

  return (
    <section className={`w-[22rem] h-[4.5rem] rounded-md ring-1 shadow-lg shadow-gray-200 ring-gray-200 gap-2 bg-white overflow-clip flex items-center justify-center ${colorClass}`}>
      <hr className={`absolute left-4 w-1 rounded-lg h-[60%] ${colorClass} flex-shrink-0`} />
      <div className="ml-8 h-full w-full flex flex-col items-start justify-center ">
        <h1 className="text-gray-700 font-medium text-sm truncate w-[90%] text-start text-ellipsis">
          {truncatedTitle}
          <span className="font-normal">{" " + message}</span>
        </h1>
        <p className="text-gray-500 text-sm line-clamp-1">{subtitle}</p>
      </div>
    </section>
  )
}

export default Toast;
