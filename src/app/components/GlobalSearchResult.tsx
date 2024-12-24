import { dateFormatter } from "@/utils/date-formatter";
import { Icon } from "../icons";
import Image from "next/image";
import Link from "next/link";
import { trpc } from "@/utils/trpc";
import { forwardRef, useImperativeHandle, useState } from "react";

export type GlobalSearchResultRef = {
  setSearch: (value: string) => void;
};

type GlobalSearchResultProps = {
  focusOut: () => void;
};

export const GlobalSearchResult = forwardRef<
  GlobalSearchResultRef,
  GlobalSearchResultProps
>(function GlobalSearchResult({ focusOut }, ref) {
  const [search, setSearch] = useState<string | undefined>();
  const res = trpc.externalApi.news.useQuery({
    search,
    page: 1,
    limit: 5,
  });

  useImperativeHandle(
    ref,
    () => ({
      setSearch,
    }),
    [],
  );

  const data = res.data?.data ?? [];

  return (
    <div
      className="scrollbar-custom flex max-h-96 flex-col gap-6 overflow-y-scroll lg:mt-10"
      onMouseLeave={focusOut}
    >
      {data.length > 0 ? (
        data.map((data, index) => (
          <Link
            href={`/publikasi/berita/${data.id}`}
            key={index}
            className="inline-flex items-center gap-4"
          >
            <div className="relative aspect-square w-24">
              <Image
                src={data.img_url}
                alt={data.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="line-clamp-2 text-sm font-semibold lg:text-base">
                {data.title}
              </h4>
              <div
                className="line-clamp-1 text-xs text-gray-600 lg:text-sm"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <div className="flex items-center gap-2">
                <Icon
                  name="Calendar"
                  className="aspect-square h-4 text-pink-500"
                />
                <div className="text-[10px] text-gray-600 lg:text-sm">
                  {dateFormatter(data.time)}
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className="flex min-h-80 items-center justify-center">
          Berita yang dicari tidak tersedia.
        </div>
      )}
    </div>
  );
});
