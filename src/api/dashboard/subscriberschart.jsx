import { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SubscribersChart() {
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

  // Process data for chart
  const subscriberNames = subscribers.map((sub) => sub.name);
  const subscriptionDates = subscribers.map((sub) =>
    new Date(sub.createdAt).toLocaleDateString()
  );

  const chartData = {
    labels: subscriberNames,
    datasets: [
      {
        label: "Subscribers",
        data: new Array(subscribers.length).fill(1), // All subscribers have equal weight
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
            const index = tooltipItem.dataIndex;
            const name = subscriberNames[index];
            const date = subscriptionDates[index];
            return `${name}\nSubscribed on: ${date}`;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full md:w-[90%] mx-auto pt-[4rem]">
      <h2 className="text-base font-bold text-black font-body  font-heading mb-4">
        Subscribers Overview
      </h2>
      {loading && <p>Loading subscribers...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && subscribers.length > 0 && (
        <div className="my-6 flex justify-center">
          <Pie data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}
