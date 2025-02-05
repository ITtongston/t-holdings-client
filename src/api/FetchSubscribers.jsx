import { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function SubscriberList() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get(
          "https://hold-api.onrender.com/newsletter"
        );
        setSubscribers(response.data);
      } catch (err) {
        setError("Failed to load subscribers");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  // Function to Download as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Subscribers List", 14, 15);

    // Define table columns
    const tableColumn = ["S/N", "Full Name", "Email", "Subscribed On"];

    // Format subscriber data
    const tableRows = subscribers.map((subscriber, index) => [
      index + 1,
      subscriber.name,
      subscriber.email,
      new Date(subscriber.createdAt).toLocaleDateString(),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    // Generate filename with date
    const fileName = `subscribers_list_${new Date()
      .toISOString()
      .slice(0, 10)}.pdf`;
    doc.save(fileName);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[90%] mx-auto pt-[4rem]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-red font-heading">
          Subscribers List
        </h2>
        <button
          onClick={downloadPDF}
          className="  flex flex-row gap-x-2 justify-center items-center  bg-background-gold  transform duration-700 ease-in-out text-black    hover:bg-background-dark hover:text-white  px-4 py-2 rounded-lg"
        >
          Download List
          <FontAwesomeIcon icon={faDownload} className="text-sm text-white" />
        </button>
      </div>

      {loading && <p>Loading subscribers...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && subscribers.length === 0 && (
        <p className="text-red font-bold font-body text-base">
          No subscribers available.
        </p>
      )}

      {!loading && !error && subscribers.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border text-black  text-xs">S/N</th>
                <th className="p-2 border text-black  text-xs">Full Name</th>
                <th className="p-2 border text-black  text-xs">Email</th>
                <th className="p-2 border text-black  text-xs">
                  Subscribed On
                </th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, index) => (
                <tr key={subscriber._id} className="text-center">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border text-black text-xs text-left">
                    {subscriber.name}
                  </td>
                  <td className="p-2 border text-black text-xs text-left">
                    <a href={`mailto:${subscriber.email}`}>
                      {subscriber.email}
                    </a>
                  </td>
                  <td className="p-2 border text-black text-xs">
                    {new Date(subscriber.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
