import React from "react";

interface Props {}

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {} = props;

  return <div>Input</div>;
});

export default Input;
