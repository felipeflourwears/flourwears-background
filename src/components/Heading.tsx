type HeadingProps = {
  className?: string;
  title?: string;
};

const Heading = ({className, title} : HeadingProps) => {
  return (
    <div className={className}>
        {title && <h2 className="h2">{title}</h2>}
    </div>
  )
}

export default Heading