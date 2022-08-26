const SpecificPlaceMap = (props) => {
  return (
    <div className="relative pb-[75%] h-0 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={props.mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpecificPlaceMap;
