import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Kullanım Şartları</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-4">
            Bu uygulama yalnızca TikTok hesap sahiplerinin yorum yönetimini kolaylaştırmak 
            amacıyla geliştirilmiştir. Uygulama kişisel kullanım içindir. 
            Kullanıcı, TikTok politikalarına ve yerel yasal düzenlemelere uymaktan sorumludur.
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
