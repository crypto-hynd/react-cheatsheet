import WithColor from "../hoc/WithColor";

const BlockB = () => {
  return(
    <div>
      This is Block-B!
    </div>
  );
}

export default WithColor(BlockB, {backgroundColor: "lightblue", width: 300, padding: 20});