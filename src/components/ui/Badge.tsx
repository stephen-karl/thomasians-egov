

type BadgeProps = {
  color: keyof typeof colors;
  children: string;
}

const colors = {
  rose: "bg-rose-50 text-rose-500",
  green: "bg-green-50 text-green-500",
  blue: "bg-blue-50 text-blue-500",
  gray: "bg-gray-50 text-gray-500",
  amber: "bg-amber-50 text-amber-500",
  purple: "bg-purple-50 text-purple-500",
  red: "bg-red-50 text-red-500",
  indigo: "bg-indigo-50 text-indigo-500",
  pink: "bg-pink-50 text-pink-500",
  yellow: "bg-yellow-50 text-yellow-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",

}

const Badge = ({
  color,
  children,
}: BadgeProps) => {
  return (
    <span className={`px-2 py-1 rounded-full uppercase text-xs tracking-wide ${colors[color]}`}>
      {children}
    </span>
  )
}

export default Badge