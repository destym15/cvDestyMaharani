function RowPekerjaan(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-blue-300 p-2 my-5">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md-col-span-4 ">{props.sebagai}</div>
            <div className="col-span-12 md-col-span-4 ">{props.intansi}</div>
            <div className="col-span-12 md-col-span-4 ">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }

  export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2x1">Riwayat Pekerjaan</h2>
            <RowPekerjaan sebagai="Anak Magang" intansi="Kantor Pusat PT.Ma'soem" tahun="2023" />
            <RowPekerjaan sebagai="Anak Magang" intansi="Oniba Center" tahun="2024" />
        </div>
    );
  }