const Parent = (props) => {
  return (
    <div>
      <h2>Parent Component</h2>
      {props.children}
    </div>
  );
};

export default Parent;