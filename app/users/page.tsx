import React from "react";
import PageTitle from "@/components/PageTitle";

type Props = {};

export default function usersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Page Users" />
    </div>
  );
}
