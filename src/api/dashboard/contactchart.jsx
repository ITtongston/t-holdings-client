import { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ContactCharts() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "https://hold-api.onrender.com/contact"
        );
        setRequests(response.data);
      } catch (err) {
        setError("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  // Process data for chart
  const topicCounts = {};
  const topicRequesters = {};

  requests.forEach((request) => {
    const topic = request.topic_of_interest || "Unknown";
    const fullName = `${request.first_name} ${request.last_name}`;

    if (!topicCounts[topic]) {
      topicCounts[topic] = 0;
      topicRequesters[topic] = [];
    }

    topicCounts[topic] += 1;
    topicRequesters[topic].push(fullName);
  });

  const chartData = {
    labels: Object.keys(topicCounts),
    datasets: [
      {
        label: "Requests by Interest",
        data: Object.values(topicCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#8E44AD",
          "#E67E22",
        ],
        hoverOffset: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const topic = tooltipItem.label;
            const count = tooltipItem.raw;
            const names = topicRequesters[topic].join(", ");
            return `${count} requests\nBy: ${names}`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full md:w-[90%] mx-auto pt-[4rem]">
      <h2 className="text-base font-bold text-black font-heading mb-4">
        Service Requests & Contact Inquiry
      </h2>
      {loading && <p>Loading requests...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && requests.length > 0 && (
        <div className="my-6 flex justify-center">
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}
