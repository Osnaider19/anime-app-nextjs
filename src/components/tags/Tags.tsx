"use client";
import { Tag } from "@/types/types";
import { Chip, Tooltip } from "@nextui-org/react";
import Link from "next/link";
export const Tags = ({ tags }: { tags: Tag[] }) => {
  return (
    <>
      {tags.length > 1 && (
        <section className="py-5 w-full h-full ">
          <h3 className="font-semibold py-2">Tags</h3>
          <div className="w-full h-full flex justify-start gap-2 items-center flex-wrap">
            {tags.map(({name , id , description}) => (
              //   <Link
              //     href={"#"}
              //     // href={{
              //     //   pathname: "/search/anime",
              //     //   query: {
              //     //     genres: tag.name || undefined,
              //     //   },
              //     // }}
              //     key={tag.id}
              //   >

              //   </Link>
              <Tooltip content={description} key={id} color="secondary">
                <Chip variant="solid" color="danger" key={id}>
                  {name}
                </Chip>
              </Tooltip>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
