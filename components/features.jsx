import { Features as AllFeatures } from "@/data/Features";
import { ConnectDialog } from "./dialog/connect_dialog";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container mb-10 rounded-3xl border border-primary-500 bg-secondary-900/30 px-8 py-10">
      <div className="mb-8">
        <h1 className="text-center font-passion-one text-4xl font-bold leading-none text-primary-500 sm:text-5xl">
          Make Your Selection Below
        </h1>
      </div>
      <div className="*:group m-auto grid gap-10 *:rounded-3xl *:border *:border-primary-500 *:bg-secondary-950/60 *:p-4 *:px-5 *:py-10 *:text-center *:font-urbanist sm:grid-cols-2 lg:grid-cols-3">
        {AllFeatures.map((feature, index) => (
          <ConnectDialog key={index}>
            <div className="group cursor-pointer hover:bg-primary-950">
              <div className="mx-auto mb-4 w-fit rounded-xl bg-primary-500 p-1.5 group-hover:bg-primary-400">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={44}
                  height={44}
                  className="mx-auto"
                />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-bold text-white">
                  {feature.title}
                </h4>
                <h6 className="m-auto max-w-[13rem] text-sm text-gray-300">
                  {feature.text}
                </h6>
              </div>
            </div>
          </ConnectDialog>
        ))}
      </div>
    </div>
  );
};

export default Features;
