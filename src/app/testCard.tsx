"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardWithForm() {
  return (
    <Card className="w-[500px] dark">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
          Hi, how can I help you today?
        </div>
        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground">
          Hey, Im having trouble with my account.
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Input placeholder="Type your message..."></Input>
        <Button onClick={() => console.log("Button clicked")}></Button>
      </CardFooter>
    </Card>
  );
}
