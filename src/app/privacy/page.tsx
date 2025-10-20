import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Gizlilik Politikası</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Yorum Botu (&quot;uygulama&quot;), TikTok API&apos;sini kullanarak içerik üreticilerinin videolarındaki yorumları görüntülemelerine ve yanıtlamalarına yardımcı olur. Bu politika, uygulamanın kişisel verileri nasıl işlediğini açıklar.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Toplanan Veriler</h2>
          <p className="text-lg mb-6">
            Uygulama yalnızca TikTok API tarafından izin verilen temel bilgilere erişir. Bu veriler; kullanıcı kimliği (open_id), video kimlikleri ve video yorumlarıyla sınırlıdır. Uygulama herhangi bir şekilde kişisel veri (isim, e-posta, telefon vb.) toplamaz veya saklamaz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Verilerin Kullanımı</h2>
          <p className="text-lg mb-6">
            Elde edilen veriler yalnızca uygulamanın temel işlevi olan yorum yönetimi amacıyla kullanılır. Hiçbir kişisel bilgi üçüncü kişilerle paylaşılmaz veya ticari amaçla kullanılmaz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Verilerin Saklanması</h2>
          <p className="text-lg mb-6">
            Uygulama, verileri kalıcı olarak saklamaz. TikTok API&apos;den çekilen bilgiler yalnızca geçici oturum süresince kullanılır ve sonrasında sistemden silinir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Üçüncü Taraf Hizmetleri</h2>
          <p className="text-lg mb-6">
            Uygulama, TikTok API&apos;si dışında herhangi bir üçüncü taraf hizmetiyle veri paylaşımı yapmaz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Güvenlik</h2>
          <p className="text-lg mb-6">
            Kullanıcı verileri yalnızca güvenli bağlantılar (HTTPS) üzerinden işlenir. Herhangi bir veri depolama veya paylaşım işlemi bulunmadığından veri ihlali riski minimaldir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. İletişim</h2>
          <p className="text-lg mb-6">
            Gizlilik politikasına ilişkin sorular için aşağıdaki e-posta adresi üzerinden bizimle iletişime geçebilirsiniz:<br />
            📩 <strong>iletisim@ismailcavus.com.tr</strong>
          </p>

          <p className="text-lg mb-8">
            Bu gizlilik politikası, 2025 yılı itibarıyla geçerlidir.
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
