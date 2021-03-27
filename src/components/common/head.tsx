// +++ DO NOT EDIT +++ //
// ___ description ___ //
// ___ description ___ //
// ___ description ___ //
// +++++++++++++++++++ //

import React from "react";
import NextHead from "next/head";

interface Props {
  title: string;
}

export default function Head(props: Props) {
  const { title } = props;

  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
}
