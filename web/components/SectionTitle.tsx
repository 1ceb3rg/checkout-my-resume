import React from "react";

export default function SectionTitle(props: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto mt-8 max-w-3xl text-lg font-medium text-slate-500 md:px-2">
      {props.children}
    </h2>
  );
}
