import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col pt-[60px]">
      <div className="w-[50%] h-[80%] relative">
        <img
          src="../../img.webp"
          alt=""
          className="absolute left-0 top-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="py-1 w-full  flex justify-center items-center flex-col gap-1">
        <p className="text-2xl font-semibold ">404 - Page Not Found</p>
        <Button href="/" as={Link} color="secondary" variant="solid">
          Return Home
        </Button>
      </div>
    </div>
  );
}
