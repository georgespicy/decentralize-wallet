import React from "react";
import { ConnectDialog } from "./dialog/connect_dialog";
import { ChainsDialog } from "./dialog/select_chain_dialog";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-violet-600/10 via-transparent">
      <div className="mx-auto max-w-[85rem] space-y-12 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="block font-passion-one text-6xl font-bold leading-none text-primary-500 sm:text-7xl lg:text-[8rem]">
            Decentralized Platform
          </h1>
        </div>

        <div className="mx-auto max-w-2xl space-y-4 text-center font-urbanist text-base font-medium text-white">
          <p>Every digital artwork on Upside is authentic and truly unique.</p>
          <p>
            Blockchain technology makes this new approach to digital ownership
            possible. Open and decentralized protocol for syncing various
            Wallets issues on Secure Server.
          </p>
          <p>
            This is not an app but a protocol that establishes a remote
            resolution between all noncustodial wallet It is an online server
            which gets you across to every wallet representative to enable
            effective complain and rectification of issues.
          </p>
          <p>
            You will be on a chat with an Artificial Intelligence Robot with
            zero Human interference.
          </p>
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 text-center font-urbanist sm:flex-row">
          <ConnectDialog>
            <a className="inline-flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-full border border-transparent bg-gradient-to-tl from-primary-600 to-primary-700 px-6 py-3 text-center text-base font-bold text-white shadow-lg shadow-transparent hover:shadow-primary-700/50 focus:shadow-primary-700/50 focus:outline-none">
              Connect Wallet
            </a>
          </ConnectDialog>

          <ChainsDialog>
            <a className="bg-tranparent inline-flex w-full cursor-pointer items-center justify-between gap-x-3 rounded-full border-2 border-primary-500 py-1.5 pl-6 pr-2 text-center text-base font-bold text-white shadow-md shadow-transparent hover:shadow-primary-700/50 focus:shadow-primary-700/50 focus:outline-none">
              Select Chain
              <span className="rounded-full bg-primary-500 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </a>
          </ChainsDialog>
        </div>
      </div>
    </div>
  );
};

export default Header;
