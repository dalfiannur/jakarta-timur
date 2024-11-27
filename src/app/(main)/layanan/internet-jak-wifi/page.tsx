import { FilterSection } from "./_features/FilterSection";
import { JakWifiList } from "./_features/JakWifiList";
import { MapAreaNoSSR } from "./_features/MapAreaNoSSR";

export default function Page() {
  return (
    <div className="mt-20 lg:mt-32">
      <div className="container mx-auto">
        <div className="p-4">
          <div className="mt-10">
            <FilterSection />

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MapAreaNoSSR />
              <JakWifiList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
