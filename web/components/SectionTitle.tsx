import React from "react";

export default function SectionTitle(props: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-3xl md:px-2 mt-8 mx-auto text-lg font-medium text-slate-500">
      {props.children}
    </h2>
  );
}
