import PropTypes from "prop-types";

const Categories = (props) => {
  return (
    <>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">{props.title}</p>
          <p className="px-2">{props.paragraph}</p>
          <a
            href={props.button}
            className="bg-transparent hover:bg-[#6366F1] text-white font-bold hover:text-white py-2 px-4 border border-white mx-2 rounded absolute bottom-4 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            {props.buttontxt}
          </a>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={props.image}
          alt={props.alttxt}
        />
      </div>
    </>
  );
};

Categories.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  image: PropTypes.string,
  alttxt: PropTypes.string,
  buttontxt: PropTypes.string,
};

export default Categories;
