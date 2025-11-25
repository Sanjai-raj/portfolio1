type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  return (
    <a
      role="button"
      className={`${outline
          ? "border border-primary hover:bg-primary dark:border-primarylight dark:hover:bg-primarylight text-primary hover:text-white dark:text-primarylight dark:hover:text-bgdark transition"
          : "bg-primary hover:bg-primarylight active:bg-primarydark dark:hover:bg-primarylight dark:active:bg-primarydark dark:bg-primary text-white dark:text-bgdark"
        } py-2 px-3 rounded lg:text-xl ${className} outline-primary dark:outline-primarylight focus-visible:outline-double outline-offset-2 transition-all duration-300`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;
