import { useState } from "react";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

const courses = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=1",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=2",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=3",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=4",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=5",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=6",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1488998527040-85054a85150e?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=7",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=8",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=220&fit=crop",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
    instructor: "Jenna Ortega",
    role: "Senior Accountant di",
    company: "Gojek",
    avatar: "https://i.pravatar.cc/32?img=9",
    rating: 3.5,
    reviews: 86,
    price: "Rp 300K",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? "text-yellow-400" : star - 0.5 <= rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-sm mb-1">{course.title}</h3>
        <p className="text-gray-500 text-xs mb-3 leading-relaxed">
          {course.description}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <img
            src={course.avatar}
            alt={course.instructor}
            className="w-7 h-7 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold text-gray-800">
              {course.instructor}
            </p>
            <p className="text-xs text-gray-500">
              {course.role}{" "}
              <span className="font-bold text-gray-700">{course.company}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <StarRating rating={course.rating} />
            <span className="text-xs text-gray-500 underline">
              {course.rating} ({course.reviews})
            </span>
          </div>
          <span className="text-green-500 font-bold text-sm">
            {course.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-[#111111] min-h-screen font-sans">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[320px] flex flex-col items-center justify-center text-center px-6 py-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white font-extrabold text-3xl md:text-4xl leading-tight max-w-2xl mb-4">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-gray-300 text-sm max-w-xl mb-8 leading-relaxed">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200">
          Temukan Video Course untuk Dipelajari!
        </button>
      </section>

      {/* COURSE COLLECTION SECTION */}
      <section className="px-6 md:px-10 py-10 max-w-6xl mx-auto">
        <h2 className="text-white font-bold text-xl mb-1">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>

        {/* Category Tabs */}
        <div className="flex gap-6 border-b border-gray-700 mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeCategory === cat
                  ? "text-white border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section
        className="relative w-full py-16 px-6 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
          Newsletter
        </p>
        <h2 className="text-white font-bold text-2xl md:text-3xl mb-3">
          Mau Belajar Lebih Banyak?
        </h2>
        <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>
        <div className="flex items-center max-w-md mx-auto bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Emailmu"
            className="flex-1 px-5 py-3 text-sm text-gray-700 outline-none bg-transparent"
          />
          <button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold text-sm px-6 py-3 transition-colors duration-200">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
