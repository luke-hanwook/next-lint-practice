import React from "react";
import Link from "next/link";

function Index() {
  return (
    <>
      <Link href="/about"><a>about</a>
      </Link>
      <div>index page</div>
    </>
  );
}

export default Index;
