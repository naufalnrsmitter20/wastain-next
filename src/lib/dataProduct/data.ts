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
import { Kategori } from "@prisma/client";

const data = {
  products: [
    {
      nama_barang: "Kaos Polos Hitam",
      slug: "kaos-polos-hitam",
      kategori: Kategori.Reuse,
      tipe: "kaos",
      harga: 50000,
      rating: 3,
      stok: 100,
      deskripsi: "Kaos polos berwarna hitam, nyaman dipakai sehari-hari. Bahan katun 100%.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576789/had5qs6zt493bbbswski.jpg",
    },
    {
      nama_barang: "Celana Jeans Biru",
      slug: "Celana-jeans-biru",
      kategori: Kategori.Recycle,
      tipe: "Celana",
      harga: 150000,
      diskon: 15,
      rating: 4,
      stok: 50,
      deskripsi: "Celana jeans biru dengan desain klasik. Cocok untuk segala acara.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576790/a38brj2discxlcascvaq.jpg",
    },
    {
      nama_barang: "Jaket Denim",
      slug: "Jaket-denim",
      kategori: Kategori.Reuse,
      tipe: "Jaket",
      harga: 200000,
      rating: 5,
      stok: 30,
      deskripsi: "Jaket denim yang stylish dan hangat. Cocok untuk musim dingin.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576790/fjn24svcfgebogdupkgo.jpg",
    },
    {
      nama_barang: "Rok Mini Polkadot",
      slug: "rok-mini-polkadot",
      kategori: Kategori.Reuse,
      tipe: "rok",
      harga: 80000,
      diskon: 12,
      rating: 4,
      stok: 70,
      deskripsi: "Rok mini dengan motif polkadot yang lucu. Bahan nyaman dan elastis.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576789/j4sckdgri7faosybpsjc.jpg",
    },
    {
      nama_barang: "Kemeja Flanel Merah",
      slug: "kemeja-flanel-merah",
      kategori: Kategori.Recycle,
      tipe: "kemeja",
      harga: 120000,
      rating: 5,
      stok: 40,
      deskripsi: "Kemeja flanel merah dengan motif kotak-kotak. Bahan lembut dan hangat.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576789/o4grlcqovrkv8l7a1rfk.jpg",
    },
    {
      nama_barang: "Blus Putih Elegan",
      slug: "blus-putih-elegan",
      kategori: Kategori.Recycle,
      tipe: "blus",
      harga: 95000,
      rating: 5,
      stok: 60,
      deskripsi: "Blus putih dengan desain elegan. Cocok untuk acara formal dan kasual.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576790/tfbboweky1txxpjcyk8j.jpg",
    },
    {
      nama_barang: "Sweater Rajut Abu",
      slug: "sweater-rajut-abu",
      kategori: Kategori.Reuse,
      tipe: "sweater",
      harga: 110000,
      rating: 4,
      stok: 45,
      deskripsi: "Sweater rajut abu-abu yang hangat dan nyaman. Desain sederhana dan stylish.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576790/fjn24svcfgebogdupkgo.jpg",
    },
    {
      nama_barang: "Cardigan Panjang",
      slug: "cardigan-panjang",
      kategori: Kategori.Reuse,
      tipe: "cardigan",
      harga: 130000,
      rating: 4,
      diskon: 20,
      stok: 35,
      deskripsi: "Cardigan panjang yang modis. Bahan lembut dan nyaman dipakai.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576790/juqovwt7jets7g0ict2g.jpg",
    },
    {
      nama_barang: "Celana Jogger",
      slug: "celana-jogger",
      kategori: Kategori.Reuse,
      tipe: Kategori.Recycle,
      harga: 90000,
      rating: 3,
      stok: 80,
      deskripsi: "Celana jogger yang nyaman untuk olahraga dan santai. Bahan katun berkualitas.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576790/gnyz1wyoluzupoabxr5f.jpg",
    },
    {
      nama_barang: "Tunik Batik",
      slug: "tunik-batik",
      kategori: Kategori.Reuse,
      tipe: "tunik",
      harga: 160000,
      diskon: 50,
      rating: 5,
      stok: 25,
      deskripsi: "Tunik batik dengan motif tradisional. Bahan nyaman dan adem.",
      image: "https://res.cloudinary.com/dvwhepqbd/image/upload/v1747576790/ecn7fyffcsexpufzqa6y.jpg",
    },
  ],
};

export default data;
