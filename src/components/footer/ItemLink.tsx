import Link from "next/link";

export const ItemLink = ({
  link,
  children,
}: {
  link?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      href={link ? link : "#"}
      className="capitalize hover:opacity-90 duration-300 text-base hover:underline transition-all "
    >
      {children}
    </Link>
  );
};
