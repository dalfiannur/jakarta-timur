"use client";
import { Icon } from "@/app/icons";
import { Card } from "./Card";
import Image from "next/image";
import { SectionTitle } from "../_components/SectionTitle";
import { MisiArt } from "./MisiArt";
import { NumberList } from "@/app/components/NumberList";

export default function Page() {
  return (
    <div className="flex-1 border-l pl-6">
      <SectionTitle>Visi Misi &amp; Kegiatan Strategis</SectionTitle>
      <div className="mt-0 lg:mt-8">
        <div className="relative flex flex-col gap-10 overflow-hidden rounded-3xl bg-[#0077B5] px-8 py-6 text-white lg:flex-row lg:gap-8">
          <svg
            style={{
              position: "absolute",
              width: 700,
              height: 700,
              top: -150,
              right: -310,
              rotate: "-5deg",
            }}
            viewBox="0 0 724 756"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M432.166 615.298C351.557 613.575 257.285 706.185 200.013 647.067C145.698 591.002 189.092 479.309 232.587 409.287C266.803 354.202 344.01 371.61 394.516 333.936C450.258 292.356 466.952 187.379 533.443 184.869C600.837 182.325 656.187 254.085 674.752 323.358C691.054 384.188 636.532 438.407 617.88 499.943C601.685 553.373 619.522 626.919 574.211 655.063C528.918 683.196 483.442 616.393 432.166 615.298Z"
              fill="white"
            />
            <path
              opacity="0.15"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M362.21 555.7C281.905 552.685 189.659 636.686 131.581 580.991C76.5017 528.172 117.745 425.62 159.824 361.617C192.926 311.267 270.12 328.732 319.751 294.774C374.528 257.297 389.3 160.487 455.471 159.338C522.541 158.174 578.927 225.529 598.637 289.935C615.944 346.491 562.605 395.681 545.117 452.274C529.932 501.411 548.992 569.756 504.367 594.99C459.758 620.214 413.292 557.619 362.21 555.7Z"
              fill="white"
            />
            <path
              opacity="0.1"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M321.427 472.24C233.433 467.416 134.308 549.799 69.4745 492.514C7.98889 438.187 50.8568 336.018 95.4992 272.618C130.619 222.743 215.529 242.023 269.112 208.995C328.251 172.544 342.263 75.555 414.688 75.8783C488.097 76.2059 551.339 145.174 574.357 210.358C594.57 267.598 537.268 315.855 519.383 372.355C503.854 421.411 526.25 490.54 477.952 514.911C429.673 539.271 377.4 475.309 321.427 472.24Z"
              fill="white"
            />
          </svg>

          <div className="font-plus-jakarta-sans">
            <h4 className="text-center text-2xl font-bold lg:text-3xl">Visi</h4>
            <div className="mt-8 text-center text-xl font-semibold lg:text-left lg:text-2xl">
              <span className="relative">
                <svg
                  width="56"
                  height="56"
                  style={{
                    position: "absolute",
                    top: -25,
                    left: -5,
                  }}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.876 27.1368H7.93268C8.11935 16.2401 10.266 14.4434 16.9627 10.4768C17.7327 10.0101 17.9893 9.0301 17.5227 8.23676C17.0793 7.46676 16.076 7.2101 15.306 7.67676C7.41935 12.3434 4.66602 15.1901 4.66602 28.7468V41.3234C4.66602 45.3134 7.90935 48.5334 11.876 48.5334H18.876C22.9827 48.5334 26.086 45.4301 26.086 41.3234V34.3234C26.086 30.2401 22.9827 27.1368 18.876 27.1368Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M44.122 27.1368H33.1787C33.3653 16.2401 35.512 14.4434 42.2087 10.4768C42.9787 10.0101 43.2353 9.0301 42.7687 8.23676C42.302 7.46676 41.322 7.2101 40.5287 7.67676C32.642 12.3434 29.8887 15.1901 29.8887 28.7701V41.3468C29.8887 45.3368 33.132 48.5568 37.0987 48.5568H44.0987C48.2053 48.5568 51.3087 45.4534 51.3087 41.3468V34.3468C51.332 30.2401 48.2287 27.1368 44.122 27.1368Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                </svg>
                T
              </span>
              erwujud Kota Administrasi Jakarta Timur yang berorientasi kepada
              pelayanan publik menuju kota berekonomi modern
              <span className="relative">
                .
                <svg
                  width="56"
                  height="56"
                  style={{
                    position: "absolute",
                    bottom: -30,
                    right: -25,
                    transform: "rotateY(180deg)",
                  }}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.876 27.1368H7.93268C8.11935 16.2401 10.266 14.4434 16.9627 10.4768C17.7327 10.0101 17.9893 9.0301 17.5227 8.23676C17.0793 7.46676 16.076 7.2101 15.306 7.67676C7.41935 12.3434 4.66602 15.1901 4.66602 28.7468V41.3234C4.66602 45.3134 7.90935 48.5334 11.876 48.5334H18.876C22.9827 48.5334 26.086 45.4301 26.086 41.3234V34.3234C26.086 30.2401 22.9827 27.1368 18.876 27.1368Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M44.122 27.1368H33.1787C33.3653 16.2401 35.512 14.4434 42.2087 10.4768C42.9787 10.0101 43.2353 9.0301 42.7687 8.23676C42.302 7.46676 41.322 7.2101 40.5287 7.67676C32.642 12.3434 29.8887 15.1901 29.8887 28.7701V41.3468C29.8887 45.3368 33.132 48.5568 37.0987 48.5568H44.0987C48.2053 48.5568 51.3087 45.4534 51.3087 41.3468V34.3468C51.332 30.2401 48.2287 27.1368 44.122 27.1368Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="relative aspect-video h-52">
            <Image
              src="/img/kantor-walikota-jaktim.png"
              alt="Kantor Walikota Administrasi Jakarta Timur"
              fill
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col-reverse items-center gap-12 lg:flex-row">
          <div className="w-80">
            <MisiArt />
          </div>
          <div className="flex-1 font-plus-jakarta-sans">
            <h4 className="mb-8 text-center text-xl font-bold text-pink-500 lg:text-3xl">
              Misi
            </h4>
            <NumberList
              data={[
                "Meningkatkan pengelolaan dan pelayanan informasi yang berkualitas, benar dan bertanggung jawab.",
                "Membangun dan mengembangkan sistem penyediaan dan layanan informasi.",
                "Meningkatkan dan mengembangkan kompetensi dan kualitas SDM dalam bidang pelayanan informasi.",
                "Mewujudkan keterbukaan informasi Sekretariat Kota Administrasi Jakarta Timur dengan proses yang cepat, tepat, mudah dan sederhana.",
              ]}
            />
          </div>
        </div>

        <div className="my-10 border-t" />

        <div className="flex flex-col items-center gap-8 p-0 lg:flex-row lg:gap-14 lg:p-8">
          <div>
            <h4 className="text-center font-plus-jakarta-sans text-lg font-bold lg:text-3xl">
              Kegiatan Strategis
            </h4>
            <p className="mt-4 font-roboto text-base text-gray-600 lg:text-xl">
              Proyek Strategis yang Mempersiapkan Kota untuk Masa Depan yang
              Lebih Baik.
            </p>
          </div>

          <div className="hidden items-center gap-5 font-plus-jakarta-sans lg:flex">
            <Card
              icon={<Icon name="FloodWarningColored" className="h-10 w-10" />}
            >
              Pengendalian dan Penanganan Banjir
            </Card>
            <div className="grid gap-5">
              <Card
                icon={
                  <Icon name="GlobalIncreaseColored" className="h-10 w-10" />
                }
              >
                Peningkatan Ekonomi Kreatif
              </Card>
              <Card icon={<Icon name="PcCovidColored" className="h-10 w-10" />}>
                Penanganan Pasca Covid
              </Card>
            </div>
            <Card
              icon={
                <Icon name="NetworkSettingLineColored" className="h-10 w-10" />
              }
            >
              Penataan Kawasan
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-5 font-plus-jakarta-sans lg:hidden">
            <Card
              icon={<Icon name="FloodWarningColored" className="h-10 w-10" />}
            >
              Pengendalian dan Penanganan Banjir
            </Card>
            <Card
              icon={<Icon name="GlobalIncreaseColored" className="h-10 w-10" />}
            >
              Peningkatan Ekonomi Kreatif
            </Card>
            <Card icon={<Icon name="PcCovidColored" className="h-10 w-10" />}>
              Penanganan Pasca Covid
            </Card>
            <Card
              icon={
                <Icon name="NetworkSettingLineColored" className="h-10 w-10" />
              }
            >
              Penataan Kawasan
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
