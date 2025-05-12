import ButtonSvg from '../assets/svg/ButtonSvg';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  px?: string;
  white?: boolean;
  onClick?: () => void;
};

const Button = ({ onClick, px, children, className = '', white, href=''}: ButtonProps) => {
  
    const classes = `button relative items-center justify-center h-11 transition-colors hover:text-[var(--color-2)] ${
      px || "px-7"
    } ${white ? "text-[var(--n-8)]" : "text-[var(--n-1)]"} ${className || ""}`;
        

    const spanClasses = `relative z-10`;

    const renderButton = () => (
        <button
        className={classes}
        onClick={onClick}
        >
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
        {/* <h1>Hello Render Button</h1> */}
        </button>
    );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
            {/* <h1>Hello Render Link</h1> */}
        </a>
    );

  return href ? renderLink() : renderButton();
};

export default Button;
