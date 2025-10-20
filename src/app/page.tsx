export default function Home() {
  return (
    <main className="min-h-screen p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Yorum Botu</h1>
        <p className="text-lg mb-8">Bu sayfa TikTok API doğrulaması içindir.</p>
        <div className="space-x-4">
          <a 
            href="/privacy" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Gizlilik Politikası
          </a>
          <span>|</span>
          <a 
            href="/terms" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Kullanım Şartları
          </a>
        </div>
      </div>
    </main>
  );
}
