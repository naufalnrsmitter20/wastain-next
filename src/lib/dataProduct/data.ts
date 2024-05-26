import kaosPolosHitam from "@/public/images/kaos-polos-hitam.jpg";
import celanaJeansBiru from "@/public/images/celana-jeans-biru.jpg";
import jaketDenim from "@/public/images/jaket-denim.jpg";
import rokMiniPolkadot from "@/public/images/rok-mini-polkadot.jpg";
import kemejaFlannelMerah from "@/public/images/kemeja-flannel merah.jpg";
import blusPutih from "@/public/images/blus-putih-elegan.jpg";
import sweaterAbu from "@/public/images/sweater-rajut-abu.jpg";
import cardiganPanjang from "@/public/images/cardigan-panjang.jpg";
import celanaJogger from "@/public/images/celana-jogger.jpg";
import tunikBatik from "@/public/images/tunik-batik.jpg";

const data = {
  products: [
    {
      nama_barang: "Kaos Polos Hitam",
      slug: "kaos-polos-hitam",
      kategori: "Reuse",
      tipe: "kaos",
      harga: 50000,
      rating: 3,
      stok: 100,
      deskripsi:
        "Kaos polos berwarna hitam, nyaman dipakai sehari-hari. Bahan katun 100%.",
      image: kaosPolosHitam,
    },
    {
      nama_barang: "Celana Jeans Biru",
      slug: "Celana-jeans-biru",
      kategori: "Recycle",
      tipe: "Celana",
      harga: 150000,
      diskon: 15,
      rating: 4,
      stok: 50,
      deskripsi:
        "Celana jeans biru dengan desain klasik. Cocok untuk segala acara.",
      image: celanaJeansBiru,
    },
    {
      nama_barang: "Jaket Denim",
      slug: "Jaket-denim",
      kategori: "Reuse",
      tipe: "Jaket",
      harga: 200000,
      rating: 5,
      stok: 30,
      deskripsi:
        "Jaket denim yang stylish dan hangat. Cocok untuk musim dingin.",
      image: jaketDenim,
    },
    {
      nama_barang: "Rok Mini Polkadot",
      slug: "rok-mini-polkadot",
      kategori: "Reuse",
      tipe: "rok",
      harga: 80000,
      diskon: 12,
      rating: 4,
      stok: 70,
      deskripsi:
        "Rok mini dengan motif polkadot yang lucu. Bahan nyaman dan elastis.",
      image: rokMiniPolkadot,
    },
    {
      nama_barang: "Kemeja Flanel Merah",
      slug: "kemeja-flanel-merah",
      kategori: "Recycle",
      tipe: "kemeja",
      harga: 120000,
      rating: 5,
      stok: 40,
      deskripsi:
        "Kemeja flanel merah dengan motif kotak-kotak. Bahan lembut dan hangat.",
      image: kemejaFlannelMerah,
    },
    {
      nama_barang: "Blus Putih Elegan",
      slug: "blus-putih-elegan",
      kategori: "Recycle",
      tipe: "blus",
      harga: 95000,
      rating: 5,
      stok: 60,
      deskripsi:
        "Blus putih dengan desain elegan. Cocok untuk acara formal dan kasual.",
      image: blusPutih,
    },
    {
      nama_barang: "Sweater Rajut Abu",
      slug: "sweater-rajut-abu",
      kategori: "Reuse",
      tipe: "sweater",
      harga: 110000,
      rating: 4,
      stok: 45,
      deskripsi:
        "Sweater rajut abu-abu yang hangat dan nyaman. Desain sederhana dan stylish.",
      image: sweaterAbu,
    },
    {
      nama_barang: "Cardigan Panjang",
      slug: "cardigan-panjang",
      kategori: "Reuse",
      tipe: "cardigan",
      harga: 130000,
      rating: 4,
      diskon: 20,
      stok: 35,
      deskripsi:
        "Cardigan panjang yang modis. Bahan lembut dan nyaman dipakai.",
      image: cardiganPanjang,
    },
    {
      nama_barang: "Celana Jogger",
      slug: "celana-jogger",
      kategori: "Reuse",
      tipe: "recycle",
      harga: 90000,
      rating: 3,
      stok: 80,
      deskripsi:
        "Celana jogger yang nyaman untuk olahraga dan santai. Bahan katun berkualitas.",
      image: celanaJogger,
    },
    {
      nama_barang: "Tunik Batik",
      slug: "tunik-batik",
      kategori: "Reuse",
      tipe: "tunik",
      harga: 160000,
      diskon: 50,
      rating: 5,
      stok: 25,
      deskripsi: "Tunik batik dengan motif tradisional. Bahan nyaman dan adem.",
      image: tunikBatik,
    },
  ],
};

export default data;
