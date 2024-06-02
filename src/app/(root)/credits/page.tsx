import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import Header from "@src/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@src/lib/actions/user.actions";
import Checkout from "@src/components/shared/Checkout";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        
          <div className="max-w-7xl mx-auto mt-12 px-6 md:px-12 xl:px-6">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {plans.map((plan) => (
          <div key={plan.name} className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gradient-to-r from-green-400 to-blue-400 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
          <h2 className="text-lg sm:text-xl font-medium text-white mb-2">{plan.name}</h2>
          <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
            <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price}</span> / Month
          </p>
          <p className="text-lg sm:text-xl text-center mb-2 text-gray-400">
            <span className="text-3xl sm:text-4xl font-bold text-white">{plan.credits}</span> Credits
          </p>

          <ul className="list-none list-inside mb-6 text-center text-gray-300">
            {plan.inclusions.map((inclusion) => (
            <li key={plan.name + inclusion.label} className={`${inclusion.isIncluded ?  "font-normal text-emerald-300" : " font-normal text-gray-100 line-through"}`}>{inclusion.label}</li>
            ))}

          </ul>
          {plan.name === "Free" ? (
            <Button variant="outline" className="credits-btn bg-teal-300">
              Free 
            </Button>
          ) : (
            <SignedIn>
              <Checkout
                plan={plan.name}
                amount={plan.price}
                credits={plan.credits}
                buyerId={user._id}
              />
            </SignedIn>
          )}
        </div>
          ))}
          
        </div>
    </div>

      </section>
    </>
  );
};

export default Credits;