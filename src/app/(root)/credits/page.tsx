import Image from "next/image";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import Header from "@src/components/shared/Header";
import { getUserById } from "@src/lib/actions/user.actions";
import { creditPlans } from "@/constants";
import Checkout from "@src/components/shared/Checkout";

const Credits = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const dbUser = await getUserById(clerkUser.id);

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit plan that suits your needs"
      />

      <section>
        <ul className="credits-list">
          {creditPlans.map((plan) => (
            <li
              key={plan.name}
              className={`credits-item relative ${
                plan.name === "Pro Package"
                  ? "ring-2 ring-violet-500 dark:ring-violet-400"
                  : ""
              }`}
            >
              {plan.name === "Pro Package" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex-center flex-col gap-3">
                <Image src={plan.icon} alt={plan.name} width={50} height={50} />
                <p className="p-20-semibold mt-2 text-slate-800 dark:text-slate-100">
                  {plan.name}
                </p>
                <p className="h1-semibold text-slate-900 dark:text-white">
                  ${plan.price}
                </p>
                <p className="p-16-regular text-slate-600 dark:text-slate-300">
                  {plan.credits} Credits
                </p>
              </div>

              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li key={inclusion.label} className="flex items-center gap-4">
                    <Image
                      src={
                        inclusion.isIncluded
                          ? "/assets/icons/check.svg"
                          : "/assets/icons/cross.svg"
                      }
                      alt={inclusion.isIncluded ? "check" : "cross"}
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular text-slate-600 dark:text-slate-300">
                      {inclusion.label}
                    </p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <button
                  disabled
                  className="credits-btn w-full rounded-full py-4 px-6 p-16-semibold opacity-60 cursor-not-allowed"
                >
                  Current Plan
                </button>
              ) : (
                <Checkout
                  plan={plan.name}
                  amount={plan.price}
                  credits={plan.credits}
                  buyerId={dbUser._id}
                />
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
