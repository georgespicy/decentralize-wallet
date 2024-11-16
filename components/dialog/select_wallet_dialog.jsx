"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { Wallets as AllWallets } from "@/data/Wallets";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
import { PhraseDialog } from "./phrase_dialog";

export function WalletDialog({ children }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-4 text-center text-xl">
              Select a Wallet
            </DialogTitle>
            <DialogDescription />
            <hr />
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
            Select a Wallet
          </DrawerTitle>
          <DrawerDescription />
          <hr />
        </DrawerHeader>
        <ProfileForm className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  return (
    <div className={cn("grid items-start gap-3 bg-white", className)}>
      <div className="relative mx-auto w-full xs:w-10/12">
        <input
          type="search"
          className="peer block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Search wallets"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 shrink-0 text-gray-500 dark:text-neutral-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div className="mx-auto mt-6 grid h-80 w-full grid-cols-3 gap-3 gap-y-8 overflow-y-scroll xs:w-10/12 lg:gap-8">
        {AllWallets.map((wallet, index) => (
          <PhraseDialog key={index}>
            <div className="cursor-pointer rounded-xl">
              <Image
                src={wallet.image}
                className="mx-auto rounded-2xl"
                alt={wallet.image}
                width={54}
                height={54}
              />
            </div>
          </PhraseDialog>
        ))}
      </div>
    </div>
  );
}
