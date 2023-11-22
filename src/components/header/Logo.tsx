import Link from "next/link";

export const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <p className="text-2xl font-semibold">NexAnime</p>
      </Link>
    </div>
  );
};
