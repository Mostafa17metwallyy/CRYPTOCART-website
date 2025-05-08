import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import '../styles/AdminOrders.css';

Chart.register(BarElement, CategoryScale, LinearScale);

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchOrders = async () => {
    const url = filter ? `http://localhost:5000/api/purchase?status=${filter}` : 'http://localhost:5000/api/purchase';
    const res = await axios.get(url);
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, [filter]);

  const getChartData = () => {
    const done = orders.filter((o) => o.status === 'done').length;
    const failed = orders.filter((o) => o.status === 'failed').length;
    return {
      labels: ['Done', 'Failed'],
      datasets: [
        {
          label: 'Purchase Status',
          data: [done, failed],
          backgroundColor: ['#00ff88', '#ff4f4f'],
        },
      ],
    };
  };

  return (
    <div className="admin-orders">
      <h2>Purchase History</h2>

      <div className="filter-section">
        <label>Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="done">Done</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      {orders.length > 0 && (
        <div className="chart-container">
          <Bar data={getChartData()} />
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Wallet</th>
            <th>Tx Hash</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id}>
              <td>{new Date(o.createdAt).toLocaleString()}</td>
              <td>{o.total}</td>
              <td style={{ color: o.status === 'done' ? 'limegreen' : 'red' }}>{o.status}</td>
              <td>{o.walletAddress.slice(0, 6)}...{o.walletAddress.slice(-4)}</td>
              <td>
                {o.transactionHash ? (
                  <a href={`https://sepolia.etherscan.io/tx/${o.transactionHash}`} target="_blank" rel="noreferrer">
                    View
                  </a>
                ) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
