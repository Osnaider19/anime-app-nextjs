import Link from "next/link";

export const ItemBrowse = ({
  link,
  title,
}: {
  link: string;
  title: string;
}) => {
  return (
    <li className="w-full h-full  flex justify-center items-center  hover:bg-[#ffffff20]  rounded-md py-2 px-2 ">
      <Link href={link ? link : "#"} className="w-full text-start">
        <p className="block min-w-full text-start  capitalize">{title}</p>
      </Link>
    </li>
  );
};
