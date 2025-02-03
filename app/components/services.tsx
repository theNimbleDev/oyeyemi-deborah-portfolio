const Services = ({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col justify-left items-center">
      <img src={image} />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Services;
