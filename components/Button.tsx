import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors ${styles}`}>
      {title}
    </button>
  )
}

export default Button;