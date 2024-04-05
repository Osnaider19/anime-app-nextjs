import { Relations } from "@/types/types";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

export const RelationsC = ({ relations }: { relations: Relations }) => {
  return (
    <>
      {relations.edges.length > 1 && (
        <div className="">
          <h2 className="py-2 font-semibold">Relations</h2>
          <div className="grid_relations">
            {relations.edges.map((item) => (
              <Tooltip
                key={item.id}
                content={item.node.title.userPreferred}
                color="danger"
                className="capitalize"
              >
                <div
                  className="min-w-[118px] max-w-[150px] w-full h-[200px] relative rounded-md overflow-hidden"
                  key={item.id}
                >
                  <Link
                    href={
                      item.node.type === "ANIME"
                        ? `/anime/${item.node.id}`
                        : "#"
                    }
                  >
                    <img
                      src={item.node.coverImage.large}
                      alt={`image de ${item.node.title.userPreferred}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute bottom-0 left-0 w-full h-full pointer-events-none "
                      style={{
                        background:
                          "linear-gradient( transparent, transparent , rgba(0, 0, 0 , .9))",
                      }}
                    ></div>
                    <div className="absolute bottom-0 left-0 w-full h-[25px] pointer-events-none ">
                      <div className="relative w-full h-full ">
                        {item.node.format && (
                          <p className="text-sm text-center">
                            {item.node.format}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
