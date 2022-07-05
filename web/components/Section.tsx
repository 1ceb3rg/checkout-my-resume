import React from "react";

export default function Section(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children, className } = props;
  return (
    <div className={" md:min-h-[4rem] " + " " + className}>
      <div className="max-w-3xl md:p-4 pt-0 mx-auto">{children}</div>
    </div>
  );
}
