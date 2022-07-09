import React from "react";

export default function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children, className } = props;
  return (
    <div className={" empty:hidden mt-4 min-w-fit " + " " + className}>
      <div className="max-w-3xl md:px-4 pt-0 mx-auto">{children}</div>
    </div>
  );
}
