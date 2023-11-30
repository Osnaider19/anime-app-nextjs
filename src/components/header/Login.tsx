import Link from "next/link";

export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center py-2 px-4 group  rounded-md hover:bg-black/20">
        <Link href={"#"} className="w-full h-full">
          <span>Login</span>
        </Link>
      </div>
      <div className="flex justify-center items-center py-2 px-4 group  rounded-md bg-blue-400">
        <Link href={"#"} className="w-full h-full">
          <span>Sing Up</span>
        </Link>
      </div>
    </>
  );
};
