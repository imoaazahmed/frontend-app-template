// +++ DO NOT EDIT +++ //
// ___ description ___ //
// ___ description ___ //
// ___ description ___ //
// +++++++++++++++++++ //

import React from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function Link(props: Props) {
  const { href, children } = props;

  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
}
