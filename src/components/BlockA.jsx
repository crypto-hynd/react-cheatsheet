import WithColor from "../hoc/WithColor";

const BlockA = () => {
  return(
    <div>
      This is Block-A!
    </div>
  );
}

export default WithColor(BlockA, {backgroundColor: "lightgray", width: 300, padding: 20});