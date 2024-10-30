const items = [
  {
    title: "Luas Wilayah",
    value: (
      <>
        188.03 Km<sup>2</sup>
      </>
    ),
  },
  {
    title: "Jumlah Penduduk",
    value: "3.275.269",
  },
  {
    title: "Kepadatan",
    value: (
      <>
        17.419 jiwa/Km<sup>2</sup>
      </>
    ),
  },
  {
    title: "Kecamatan",
    value: 10,
  },
  {
    title: "Kelurahan",
    value: 65,
  },
  {
    title: "RT / RW",
    value: "7948 / 711",
  },
];

export const CitizenOverview = () => {
  return (
    <div className="py-4 px-10">
      <h5 className="text-xl font-bold">Overview Kependudukan</h5>
      <div className="mt-4 grid grid-cols-6 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl bg-[#0077B5] text-white relative"
          >
            <p className="font-bold">{item.value}</p>
            <h6 className="mt-2 text-sm">{item.title}</h6>

            <svg
              className="absolute bottom-0 right-0"
              width="80"
              height="82"
              viewBox="0 0 80 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.1">
                <path
                  d="M63.9009 63.4609H42.7949V84.6469H63.9009V63.4609Z"
                  fill="white"
                />
                <path
                  d="M42.7993 42.2773H21.6934V63.4622H42.7993V42.2773Z"
                  fill="white"
                />
                <path
                  d="M42.7993 63.4609H21.6934V84.6469H42.7993V63.4609Z"
                  fill="#1C5DDC"
                />
                <path
                  d="M21.6929 63.4609H0.585938V84.6469H21.6929V63.4609Z"
                  fill="white"
                />
                <path
                  d="M84.813 0.0996094H63.707V21.2845H84.813V0.0996094Z"
                  fill="white"
                />
                <path
                  d="M84.813 21.2871H63.707V42.472H84.813V21.2871Z"
                  fill="#1C5DDC"
                />
                <path
                  d="M84.813 42.4707H63.707V63.6566H84.813V42.4707Z"
                  fill="white"
                />
                <path
                  d="M63.7066 21.2871H42.5996V42.472H63.7066V21.2871Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
