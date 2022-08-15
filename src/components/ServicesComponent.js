const ServicesComponent = (props) => {
  return (
    <div className="flex">
      <div className="mr-4 text-[#6366F1] text-5xl">
        <props.icon />
      </div>

      <div>
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="text-lg pt-2 pb-4">{props.paragraph}</p>
      </div>
    </div>
  );
}

export default ServicesComponent