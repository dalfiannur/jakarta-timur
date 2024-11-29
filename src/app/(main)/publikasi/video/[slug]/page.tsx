import { ShareContent } from "../../_components/ShareContent";
import { Tags } from "../../_components/Tags";
import { NewsList } from "../../_features/NewsList";
import { Provider } from "./Provider";
import { CategoryText } from "./_features/CategoryText";
import { TitleText } from "./_features/TitleText";
import { DateText } from "./_features/DateText";
import { DescriptionText } from "./_features/DescriptionText";
import { VideoPlayer } from "./_features/VideoPlayer";

export default function Page() {
  return (
    <div className="px-4">
      <div className="mt-12 flex flex-col gap-16 lg:flex-row">
        <div className="flex-1">
          <Provider>
            <div className="grid gap-2 lg:gap-4">
              <CategoryText />
              <TitleText />
              <div className="flex gap-4 font-plus-jakarta-sans text-xs font-medium lg:text-sm">
                <DateText />
              </div>
            </div>

            <div className="relative mt-6 aspect-video overflow-hidden rounded-xl lg:mt-12">
              <VideoPlayer />
            </div>

            <DescriptionText />

            <div className="mt-8">
              <ShareContent label="Bagikan Video Ini" />
            </div>
            <div className="mt-8">
              <Tags
                data={[
                  { label: "#Penanggulangan Banjir" },
                  { label: "#Covid 19" },
                  { label: "#Inovasi" },
                  { label: "#Pendidikan" },
                  { label: "#Ekonomi" },
                ]}
              />
            </div>
          </Provider>
        </div>
        <div className="flex w-full flex-col gap-12 lg:w-[437px]">
          <NewsList />
        </div>
      </div>
    </div>
  );
}
