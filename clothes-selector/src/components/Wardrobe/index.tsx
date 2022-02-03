const Wardrobe = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ul key={index}>
            <li>{`${item.colour} ${item.type}`}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Wardrobe;
