// +++ DO NOT EDIT +++ //
// ___ description ___ //
// ___ description ___ //
// ___ description ___ //
// +++++++++++++++++++ //

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {
  const { children } = props;

  return <div className="container mx-auto">{children}</div>;
}
