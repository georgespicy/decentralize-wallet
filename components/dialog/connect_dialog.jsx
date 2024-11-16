"use client";
import React, { useState } from "react";
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
import { WalletDialog } from "./select_wallet_dialog";
import { ChainsDialog } from "./select_chain_dialog";
import { DappDialog } from "./select_dapp_dialog";
import { PhraseDialog } from "./phrase_dialog";

export function ConnectDialog({ children }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 576px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="bg-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-4 text-center text-xl">
              Get Started
            </DialogTitle>
            <hr />
            <DialogDescription className="flex items-center justify-center">
              <span className="mt-4 inline-flex items-center gap-x-1.5 rounded-lg bg-blue-100 px-3 py-1.5 text-xs text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 sm:text-sm">
                Connect
              </span>
            </DialogDescription>
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
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-4 text-center text-xl">
            Get Started
          </DrawerTitle>
          <hr />
          <DrawerDescription className="mt-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-x-1.5 rounded-lg bg-blue-100 px-3 py-1.5 text-xs text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 sm:text-sm">
              Connect
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  return (
    <div className={cn("grid items-start gap-3 bg-white", className)}>
      <WalletDialog>
        <article className="mx-auto flex w-10/12 cursor-pointer items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-1.5 px-4 hover:bg-gray-100">
          <div className="flex items-center gap-4">
            <Image
              priority
              src="/images/trust_wallet.png"
              width={44}
              height={44}
              alt="Trust Wallet"
              className="rounded-xl"
            />

            <p className="text-lg font-medium text-gray-900">All Wallets</p>
          </div>

          <div className="inline-flex gap-2 rounded bg-[#3396ff]/15 p-1 text-[#3396ff]">
            <span className="text-[10px] font-bold"> 370+ </span>
          </div>
        </article>
      </WalletDialog>

      <ChainsDialog>
        <article className="mx-auto flex w-10/12 cursor-pointer items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-1.5 px-4 hover:bg-gray-100">
          <div className="flex items-center gap-4">
            <Image
              priority
              src="/images/chains.png"
              width={40}
              height={40}
              alt="Trust Wallet"
              className="rounded-xl"
            />

            <p className="text-lg font-medium text-gray-900">All Chains</p>
          </div>

          <div className="inline-flex gap-2 rounded bg-[#6c1cc2]/15 p-1 text-[#6c1cc2]">
            <span className="text-[10px] font-bold"> 370+ </span>
          </div>
        </article>
      </ChainsDialog>

      <DappDialog>
        <article className="mx-auto flex w-10/12 cursor-pointer items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-1.5 px-4 hover:bg-gray-100">
          <div className="flex items-center gap-4">
            <Image
              priority
              src="/images/PancakeSwap.png"
              width={44}
              height={44}
              alt="Trust Wallet"
              className="rounded-xl"
            />

            <p className="text-lg font-medium text-gray-900">All Dapps</p>
          </div>

          <div className="inline-flex gap-2 rounded bg-[#ab0436]/15 p-1 text-[#ab0436]">
            <span className="text-[10px] font-bold"> 1170+ </span>
          </div>
        </article>
      </DappDialog>

      <PhraseDialog>
        <article className="mx-auto flex w-10/12 cursor-pointer items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-1.5 px-4 hover:bg-gray-100">
          <div className="flex items-center gap-4">
            <Image
              priority
              src="/images/new-way.svg"
              width={40}
              height={40}
              alt="Trust Wallet"
              className="rounded-xl"
            />

            <p className="text-lg font-medium text-gray-900">AI Toolkit</p>
          </div>

          <div className="inline-flex gap-2 rounded bg-[#6dc134]/15 p-1 text-[#6dc134]">
            <span className="text-[10px] font-bold"> Fast & Secure </span>
          </div>
        </article>
      </PhraseDialog>

      <PhraseDialog>
        <span className="mx-auto inline-flex w-fit cursor-pointer items-center gap-x-1.5 rounded-lg bg-blue-100 px-3 py-1.5 text-xs text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 sm:text-sm">
          Connect with Web3
        </span>
      </PhraseDialog>

      <PhraseDialog>
        <button className="mx-auto flex items-center justify-center gap-2 rounded-full bg-[#0052ff] px-8 py-3 font-urbanist text-sm font-medium text-white">
          <Image
            priority
            src="/images/wallet-connect.svg"
            width={30}
            height={30}
            alt="metamask"
          />
          Wallet Connect
        </button>
      </PhraseDialog>

      <div className="mx-auto w-8/12 text-center leading-none">
        <small className="text-gray-500">
          By connecting your wallet you agree to our Terms of Service and
          Privacy Policy
        </small>
      </div>
    </div>
  );
}
