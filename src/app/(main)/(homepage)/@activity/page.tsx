import { getFormattedActivities } from "@/app/actions/get-activities";
import { Agenda } from "@/app/components/Agenda";
import { Calender } from "@/app/components/Calender";
import { Event } from "@/app/components/Event";
import { SectionBox } from "@/app/components/SectionBox";

export default async function Page() {
  const data = await getFormattedActivities();
  return (
    <SectionBox
      align="center"
      title="Tetap Terinformasi Dengan Kegiatan Pemerintah"
      subtitle="Ketahui Informasi dan Pengumuman Pemerintah Jakarta Timur Terkini"
    >
      <div className="container mx-auto">
        <div className="flex gap-8 bg-white drop-shadow p-6 rounded-xl">
          <Calender
            listAgenda={data}
            // onItemClick={() => {
            //   console.log("");
            // }}
          />

          <div className="flex-1 grid gap-1">
            <h4 className="font-semibold text-2xl font-plus-jakarta-sans">
              Agenda Pimpinan
            </h4>
            <Agenda data={data} />
          </div>
          <Event
            items={[
              {
                image: "/img/event-1.png",
              },
              {
                image: "/img/event-2.png",
              },
              {
                image: "/img/event-3.png",
              },
            ]}
          />
        </div>
      </div>
    </SectionBox>
  );
}
