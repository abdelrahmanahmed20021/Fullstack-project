import React from 'react';

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';

export default function PostCard({ data }: { data: any }) {
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
            <h4 className="text-small font-semibold leading-none text-default-600">
              {data?.email}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{data?.name}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{data.posts[0].title}</p>
        <span className="pt-2">{data.posts[0].content}</span>
      </CardBody>
      <CardFooter className="gap-3">{/* <div>{updated}</div> */}</CardFooter>
    </Card>
  );
}
