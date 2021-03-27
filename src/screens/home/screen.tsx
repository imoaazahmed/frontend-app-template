import React from "react";
import Link from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <div>Hello World!</div>

      <Link href="/welcome">
        <a>Go to welcome page</a>
      </Link>
    </div>
  );
}
