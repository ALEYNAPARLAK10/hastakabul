import Sidebar from "../../../components/Sidebar";

export default function ImagesPage() {
  const images = [
    {
      id: 1,
      imageName: "goruntu1.png",
      patientName: "hasta2",
      createdAt: "03-07-2025",
      updatedAt: "03-07-2025",
      size: "2MB",
    },
    {
      id: 2,
      imageName: "goruntu2.jpg",
      patientName: "hasta1",
      createdAt: "03-07-2025",
      updatedAt: "03-07-2025",
      size: "3.5MB",
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-6 overflow-x-auto">
        <div className="w-full border border-gray-500">
          <table className="min-w-full text-left">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2 border">Görselin Adı</th>
                <th className="px-4 py-2 border">Hastanın Adı</th>
                <th className="px-4 py-2 border">Oluşturulma Tarihi</th>
                <th className="px-4 py-2 border">Güncellenme Tarihi</th>
                <th className="px-4 py-2 border">Boyutu</th>
              </tr>
            </thead>
            <tbody>
              {images.map((img) => (
                <tr key={img.id} className="border-t">
                  <td className="px-4 py-2 border font-bold text-gray-900">{img.imageName}</td>
                  <td className="px-4 py-2 border font-bold text-gray-900">{img.patientName}</td>
                  <td className="px-4 py-2 border font-bold text-gray-900">{img.createdAt}</td>
                  <td className="px-4 py-2 border font-bold text-gray-900">{img.updatedAt}</td>
                  <td className="px-4 py-2 border font-bold text-gray-900">{img.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
