const Wardrobe = ({ data }) => {
  console.log(40, data);
  return (
    <div>
      {data.map((item, index) => {
        console.log(12, `${item.colour} ${item.type}`);
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
