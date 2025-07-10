import Sidebar from "../../../components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 p-6 overflow-x-auto">
        <div className="w-full border border-gray-500">
          <table className="min-w-full text-left">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 border">Hastanın Adı</th>
                <th className="px-4 py-2 border">TCKN</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Telefon</th>
                <th className="px-4 py-2 border">Adres</th>
                <th className="px-4 py-2 border">Görseller</th>
              </tr>
            </thead>
            <tbody>
       <tr className="border-t">
  <td className="px-4 py-2 border font-bold text-gray-900">-</td>
  <td className="px-4 py-2 border font-bold text-gray-900">-</td>
  <td className="px-4 py-2 border font-bold text-gray-900">-</td>
  <td className="px-4 py-2 border font-bold text-gray-900">-</td>
  <td className="px-4 py-2 border font-bold text-gray-900">-</td>
  <td className="px-4 py-2 border font-bold text-gray-900">-</td>
</tr>

             
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
