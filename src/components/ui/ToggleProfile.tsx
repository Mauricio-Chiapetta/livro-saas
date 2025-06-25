"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import Form from "next/form";
import logoutAction from "@/app/(auth)/(logout)/logoutAction";

export function ToggleProfile({ userName }: { userName?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-light uppercase text-xs">
          {userName}
        </DropdownMenuLabel>
        <Form action={logoutAction}>
          <Button size={"sm"} variant={"outline"}>
            <DropdownMenuItem className="cursor-pointer">
              Logout
            </DropdownMenuItem>
          </Button>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
