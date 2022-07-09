import React from "react";

export default function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children, className } = props;
  return (
    <div className={" mt-4 min-w-fit empty:hidden " + " " + className}>
      <div className="mx-auto max-w-3xl pt-0 md:px-4">{children}</div>
    </div>
  );
}
