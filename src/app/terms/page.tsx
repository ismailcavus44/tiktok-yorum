import Link from "next/link";

export default function Terms() {
  return (
    <main className="min-h-screen p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Kullanım Şartları</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Bu metin, Yorum Botu (&quot;uygulama&quot;) hizmetlerinin kullanım koşullarını belirler. Uygulamayı kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Hizmetin Amacı</h2>
          <p className="text-lg mb-6">
            Uygulama, TikTok API&apos;sini kullanarak video yorumlarını yönetmek, yanıtlamak ve etkileşimi artırmak için geliştirilmiştir. Uygulama kişisel veya ticari amaçla kullanılabilir, ancak TikTok&apos;un resmi kullanım politikalarına aykırı eylemlerden kullanıcı sorumludur.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Kullanıcı Sorumluluğu</h2>
          <p className="text-lg mb-6">
            Kullanıcı, TikTok API erişim izinlerini yalnızca kendi hesabı adına kullanabilir. Uygulamanın kötüye kullanımı (spam, izinsiz veri paylaşımı, bot saldırıları vb.) yasaktır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sorumluluk Reddi</h2>
          <p className="text-lg mb-6">
            Uygulama, TikTok API&apos;sine bağlı olarak çalıştığı için TikTok tarafından yapılan değişikliklerden veya erişim kısıtlamalarından sorumlu değildir. Uygulama, kullanıcıya doğrudan veya dolaylı zararlardan dolayı sorumluluk kabul etmez.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Fikri Mülkiyet</h2>
          <p className="text-lg mb-6">
            Uygulama kodları, tasarımı ve içeriği geliştiriciye aittir. İzinsiz kopyalanamaz veya dağıtılamaz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Değişiklik Hakkı</h2>
          <p className="text-lg mb-6">
            Yorum Botu, bu kullanım şartlarını önceden bildirmeksizin güncelleme hakkını saklı tutar. Güncellemeler sitede yayımlandığı anda yürürlüğe girer.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. İletişim</h2>
          <p className="text-lg mb-6">
            Bu şartlarla ilgili tüm sorular için bizimle iletişime geçebilirsiniz:<br />
            📩 <strong>iletisim@ismailcavus.com.tr</strong>
          </p>

          <p className="text-lg mb-8">
            Bu kullanım şartları 2025 yılı itibarıyla yürürlüğe girmiştir.
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
