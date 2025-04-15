import React from "react";
import { DashboardLayout as Layout } from "@/components";
interface DashboardLayout {
  children: React.ReactNode;
}
export default async function DashboardLayout(props: DashboardLayout) {
  const { children } = props;
  return <Layout>{children}</Layout>;
}
