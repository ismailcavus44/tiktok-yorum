import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Gizlilik Politikası</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-4">
            Bu uygulama TikTok API aracılığıyla kullanıcı yorumlarını işler. 
            Hiçbir kişisel veri kalıcı olarak saklanmaz veya üçüncü kişilerle paylaşılmaz. 
            Kullanıcı verileri sadece TikTok izinleri kapsamında geçici olarak işlenir.
          </p>
          <div className="mt-8">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
