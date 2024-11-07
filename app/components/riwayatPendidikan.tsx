function RowRiwayat(props:any) {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-blue-300 p-2 my-5">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md-col-span-4 ">{props.jenjang}</div>
            <div className="col-span-12 md-col-span-4 ">{props.sekolah}</div>
            <div className="col-span-12 md-col-span-4 ">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }

  export default function RiwayatPendidikan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2x1">Riwayat Pendidikan</h2>
            <RowRiwayat jenjang="SD" sekolah="SDN 8 CICALENGKA" tahun="2010-2016" />
            <RowRiwayat jenjang="SMP" sekolah="SMPN 1 CICALENGKA" tahun="2016-2019" />
            <RowRiwayat jenjang="SMA" sekolah="SMAN 1 CICALENGKA" tahun="2019-2022" />
            <RowRiwayat jenjang="Diploma 3" sekolah="Ma'soem University" tahun="2022-2024" />
        </div>
    );
  }