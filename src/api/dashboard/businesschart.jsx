import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";

export default function ServiceRequestChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [requestList, setRequestList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "https://hold-api.onrender.com/business"
        );
        const requests = response.data;

        console.log("API Response:", requests); // Debugging API response

        // Extract labels and service requests
        const labels = requests.map((req) => req.org_name || "Unknown Org");
        const services = requests.map(
          (req) => req.service_required || "Unknown Service"
        );

        // Prepare key list
        const requestDetails = requests.map((req) => ({
          organization: req.org_name || "Unknown Org",
          service: req.service_required || "Unknown Service",
          date: req.createdAt
            ? new Date(req.createdAt).toLocaleDateString()
            : "N/A",
        }));

        setChartData({
          labels,
          datasets: [
            {
              label: "Service Requested",
              data: new Array(requests.length).fill(1), // Dummy data to match length
              backgroundColor: "#75e6da",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
              serviceNames: services, // Store service names in dataset
            },
          ],
        });

        setRequestList(requestDetails);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full md:w-[90%] mx-auto">
      <h2 className="text-lg font-bold mb-4 text-black font-body ">
        Service Requests Overview
      </h2>
      {loading && <p>Fetching data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                },
                tooltip: {
                  callbacks: {
                    label: function (tooltipItem) {
                      let dataset = tooltipItem.dataset;
                      let index = tooltipItem.dataIndex;
                      return `Service: ${dataset.serviceNames[index]} `;
                    },
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Requesting Organization",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Total Requests",
                  },
                  beginAtZero: true,
                },
              },
            }}
          />

          {/* Request Key */}
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2 text-yellow ">
              Request Key
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-black font-body text-sm ">
                      Organization
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-black font-body text-sm">
                      Service Requested
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-black font-body text-sm">
                      Request Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requestList.map((req, index) => (
                    <tr key={index} className="text-left">
                      <td className="border border-gray-300 px-4 py-2 text-black text-xs ">
                        {req.organization}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-black text-xs ">
                        {req.service}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-black text-xs ">
                        {req.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
