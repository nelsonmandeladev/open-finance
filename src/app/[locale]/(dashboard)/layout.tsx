import React from "react";

interface DashboardLayout {
  children: React.ReactNode;
}
export default async function DashboardLayout(props: DashboardLayout) {
  const { children } = props;
  return <div>{children}</div>;
}
