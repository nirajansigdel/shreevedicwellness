import Link from "next/link";
import { TbCircleCheckFilled, TbMail, TbPhone } from "react-icons/tb";
export default async function CheckoutPage({}: {
  params: { orderId: string };
}) {
  return (
    <div className="w-full px-5 md:px-0 md:w-4/5 mx-auto h-screen flex items-center justify-center">
      <div className="w-full lg:w-2/5 border rounded-md p-4">
        <div className="flex items-center justify-center mb-5">
          <TbCircleCheckFilled className="text-[58px] text-primary" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold">
            Thank You For Choosing Us! 🤗
          </h1>
          <div className="my-6">
            <p className="text-secondary">
              We have captured your Registration and will respond back to you
              very soon! Feel free to reach out to for any query:
            </p>
            <div className="flex flex-col mt-2 gap-3">
              <Link
                href="mailto:shreejanauprety7@gmail.com"
                className="text-primary border py-3 gap-2 rounded-md flex items-center justify-center"
              >
                <TbMail />
                shreejanauprety7@gmail.com
              </Link>
              <div className="border py-3 gap-2 rounded-md flex items-center justify-center">
                <TbPhone /> <p>+91 123456789</p>
              </div>
            </div>
          </div>
          <div className="">
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Bact To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
