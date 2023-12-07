"use client";
import { Chip } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
export function FiltersActive() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const genres = params.get("genres")?.toString().split(",");
  const formats = params.get("format")?.toString().split(",");
  const year = params.get("year")?.toString();
  const season = params.get("season")?.toString();
  const search = params.get("search")?.toString();

  const handleCloseGrup = (valueRemove: string, keyParam: string) => {
    const arryKeyParams = params.get(keyParam)?.toString().split(",");
    const newKeyParams = arryKeyParams?.filter(
      (value) => value !== valueRemove
    );
    if (newKeyParams && newKeyParams?.length >= 1) {
      params.set(keyParam, newKeyParams.toString());
    } else {
      params.delete(keyParam);
    }
    replace(`${pathname}?${params}`);
  };
  const handelCloseAll = () => {
    replace(`${pathname}`);
  };

  const handelCloseOne = (KeyParam: string) => {
    if (KeyParam) {
      params.delete(KeyParam);
    }
    replace(`${pathname}?${params}`);
  };
  const variant = "shadow";
  const color = "secondary";
  return (
    <>
      {genres || year || formats || search || search || season ? (
        <div className="px-3 py-4 w-full items-center flex md:px-0">
          <div className="flex gap-2 flex-wrap w-full ">
            {genres?.map((genre) => (
              <Chip
                key={genre}
                onClose={() => handleCloseGrup(genre, "genres")}
                variant={variant}
                color={color}
              >
                {genre}
              </Chip>
            ))}
            {formats?.map((format) => (
              <Chip
                key={format}
                onClose={() => handleCloseGrup(format, "format")}
                variant={variant}
                color={color}
              >
                {format}
              </Chip>
            ))}
            {year && (
              <Chip
                onClose={() => handelCloseOne("year")}
                color={color}
                variant={variant}
              >
                {year}
              </Chip>
            )}
            {search && (
              <Chip
                onClose={() => handelCloseOne("search")}
                color={color}
                variant={variant}
              >
                {search}
              </Chip>
            )}
            {season && (
              <Chip
                onClose={() => handelCloseOne("season")}
                variant={variant}
                color={color}
              >
                {season}
              </Chip>
            )}

            {genres || year || formats || season ? (
              <Chip onClose={handelCloseAll} color="danger" variant="shadow">
                Clear All
              </Chip>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
