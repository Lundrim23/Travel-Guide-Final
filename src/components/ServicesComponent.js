import PropTypes from "prop-types";

const ServicesComponent = (props) => {
  return (
    <div className="flex">
      <div className="mr-4 text-[#66768C] text-5xl">
        <props.icon />
      </div>

      <div>
        <h3 className="font-bold text-lg">{props.title}</h3>
        <p className="text-lg pt-2 pb-4">{props.paragraph}</p>
      </div>
    </div>
  );
};

ServicesComponent.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default ServicesComponent;
