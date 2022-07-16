import WithColor from "../hoc/WithColor";

const BlockC = () => {
  return(
    <div>
      This is Block-B!
    </div>
  );
}

export default WithColor(BlockC, {backgroundColor: "lightcoral", width: 300, padding: 20});