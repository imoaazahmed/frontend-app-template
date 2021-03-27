import React from "react";
import Container from "@components/common/container";
import Link from "next/link";
import Input from "@components/common/input";

export default function WelcomeScreen() {
  return (
    <div>
      <Container>
        <div>Welcome!</div>

        <Link href="/">
          <a>Back to home</a>
        </Link>
      </Container>
    </div>
  );
}
