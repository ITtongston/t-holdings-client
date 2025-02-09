import { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function GetServiceRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "https://hold-api.onrender.com/business"
        );
        setRequests(response.data);
      } catch (err) {
        setError("Failed to load requests");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape", // Adjust orientation if needed
      unit: "mm",
      format: "a4",
    });

    doc.setFontSize(14);
    doc.text("Service Request List", 14, 15);

    // Define table columns
    const tableColumn = [
      "S/N",
      "Organization Name",
      "Contact Person",
      "Email Address",
      "Phone Number",
      "Address",
      "Service Delivery Date",
      "Service Required",
      "Requested On",
    ];

    // Format data
    const tableRows = requests.map((request, index) => [
      index + 1,
      request.org_name || "N/A",
      request.contact_person || "N/A",
      request.email_address || "N/A",
      request.phone_number || "N/A",
      request.address || "N/A",
      request.delivery_date
        ? new Date(request.delivery_date).toLocaleDateString()
        : "N/A",
      request.service_required || "N/A",
      request.createdAt
        ? new Date(request.createdAt).toLocaleDateString()
        : "N/A",
    ]);

    // Generate table with styles
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      styles: {
        fontSize: 6, // Match UI text size
        cellPadding: 3,
        overflow: "linebreak", // Ensures text wraps within the cell
      },
      headStyles: {
        // fillColor: "#C79F00BA", // Light gray header background
        // textColor: "#ffff", // Black text
        fontSize: 9,
      },
      columnStyles: {
        0: { cellWidth: 10 }, // S/N
        1: { cellWidth: 40 }, // Organization Name
        2: { cellWidth: 30 }, // Contact Person
        3: { cellWidth: 40 }, // Email
        4: { cellWidth: 30 }, // Phone Number
        5: { cellWidth: 40 }, // Address
        6: { cellWidth: 30 }, // Service Delivery Date
        7: { cellWidth: 30 }, // Service Required
        8: { cellWidth: 25 }, // Requested On
      },
    });

    const fileName = `service_request_list_${new Date()
      .toISOString()
      .slice(0, 10)}.pdf`;
    doc.save(fileName);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md    w-full  md:w-[90%] mx-auto pt-[4rem]">
      <div className="flex   flex-col gap-y-2 md:flex-row justify-start  items-start  md:justify-between md:items-center mb-4">
        <h2 className="text-base font-bold text-red font-heading">
          Service Request List
        </h2>
        <button
          onClick={downloadPDF}
          className="flex flex-row gap-x-2 justify-center items-center bg-transparent border border-background-footer_black text-black transform duration-700 ease-in-out  hover:border-background-danger   px-4 py-2 rounded-lg"
        >
          Get List
          <FontAwesomeIcon icon={faDownload} className="text-black text-xs" />
        </button>
      </div>

      {loading && <p>Loading requests...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && requests.length === 0 && (
        <p className="text-red font-bold font-body text-base">
          No requests available.
        </p>
      )}

      {!loading && !error && requests.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border text-black text-xs">S/N</th>
                <th className="p-2 border text-black text-xs">
                  Organization Name
                </th>
                <th className="p-2 border text-black text-xs">
                  Contact Person
                </th>
                <th className="p-2 border text-black text-xs">Email Address</th>
                <th className="p-2 border text-black text-xs">Phone Number</th>
                <th className="p-2 border text-black text-xs">Address</th>
                <th className="p-2 border text-black text-xs">
                  Service Delivery Date
                </th>
                <th className="p-2 border text-black text-xs">
                  Service Required
                </th>
                <th className="p-2 border text-black text-xs">Requested On</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={request._id || index} className="text-center">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border text-black text-xs text-left">
                    {request.org_name || "N/A"}
                  </td>
                  <td className="p-2 border text-black text-xs text-left">
                    {request.contact_person || "N/A"}
                  </td>
                  <td className="p-2 border text-black text-xs text-left">
                    <a href={`mailto:${request.email_address}`}>
                      {request.email_address || "N/A"}
                    </a>
                  </td>
                  <td className="p-2 border text-black text-xs text-left">
                    {request.phone_number || "N/A"}
                  </td>
                  <td className="p-2 border text-black text-xs text-left">
                    {request.address || "N/A"}
                  </td>
                  <td className="p-2 border text-black text-xs text-left">
                    {request.delivery_date
                      ? new Date(request.delivery_date).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="p-2 border text-black text-xs text-wrap  text-left">
                    {request.service_required || "N/A"}
                  </td>
                  <td className="p-2 border text-black">
                    {request.createdAt
                      ? new Date(request.createdAt).toLocaleDateString()
                      : "N/A"}
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
