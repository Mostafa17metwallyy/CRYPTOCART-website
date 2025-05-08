import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/AdminContactMessages.css"

const AdminContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching contact messages from the backend
    axios.get('http://localhost:5000/api/admin/contactmessages')  // The endpoint to get messages
      .then(res => {
        console.log('Fetched messages:', res.data); // Log the response to check if the data is coming through
        setMessages(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching contact messages:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading messages...</p>;
  }

  if (!messages.length) {
    return <p>No contact messages found.</p>;  // If no messages in DB
  }

  return (
    <div className="admin-contactmessages">
      <h2>Admin Contact Messages</h2>
      <table>
        <thead>
          <tr>
            <th>Message ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Submitted At</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message._id}>
              <td>{message._id}</td>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.message}</td>
              <td>{new Date(message.submittedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContactMessages;
