import React from "react";

import { convertDate } from "@/utils";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from "@nextui-org/react";

export default function PostCard({
  data,
}: {
  data: {
    title: string;
    content: string;
    user: any;
    createdAt: string;
    updatedAt: string;
    userId: string;
    id: string;
  };
}) {
  const created = convertDate(data.createdAt);
  const updated = convertDate(data.updatedAt);
  return (
    <Card className="w-[400px] min-h-[200px] max-h-[500px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="/avatars/avatar-1.png"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            {data.user && (
              <>
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {data?.user?.email}
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  @{data?.user.email}
                </h5>
              </>
            )}
            {!data?.user && <Spinner color="warning" size="sm" />}
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{data.title}</p>
        <span className="pt-2">{data.content}</span>
      </CardBody>
      <CardFooter className="gap-3">
        <div>{updated}</div>
      </CardFooter>
    </Card>
  );
}
