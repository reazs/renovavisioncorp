import { Separator } from "@/components/ui/separator";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import VerifyCodeSection from "./verifyCodeSection";
import GenerateCode from "./generateCode";

const page = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-up");
  }
  const email = user.emailAddresses[0];
  const companyEmail = process.env.COMPANY_EMAIL as string;
  return (
    <div className="p-5 md:max-w-screen-xl mx-auto">
      <div className="flex  items-center space-x-3">
        {/* left container */}
        <div>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-12 h-12 ",
              },
            }}   
          />
        </div>

        {/* right container */}
        <div>
          <h3 className="">Hello, {user.firstName}</h3>
          <p className=" text-slate-300 ">@{user.username}</p>
        </div>
      </div>
      <Separator className="my-5 " />

      {email.emailAddress === companyEmail ? (
        <GenerateCode />
      ) : (
        <VerifyCodeSection />
      )}
    </div>
  );
};

export default page;
