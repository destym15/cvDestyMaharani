import foto from "../foto.jpeg";

function Profile() {
    return <img src={foto.src} alt="Desty Maharani" 
    className="fotoku" />;
  }

  export default function Hero() {
    return (
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-400 font-bold "> CV ONLINE</h1>
          <h2 className="text-3xl">Desty Maharani</h2>
          <Profile />
          <p>
            Nama saya Desty Maharani dan saya adalah seorang Mahasiswa Prodi Komputerisasi Akuntansi semester 5 di Universitas Ma'soem.
          </p>
        </div>
    );
  }