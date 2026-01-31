"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";
import styles from "./admin.module.css";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const router = useRouter();

  useEffect(() => {
    fetchContacts();
  }, [page, limit]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/contact?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data.success) {
        setContacts(data.data);
        setTotal(data.pagination.total);
      } else {
        // Handle error (optional)
      }
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      // Fetch all data for export
      const res = await fetch(`/api/contact?limit=${total}`);
      const data = await res.json();
      
      if (data.success) {
        const worksheet = XLSX.utils.json_to_sheet(
          data.data.map((item) => ({
            Name: item.fullName,
            Email: item.email,
            Mobile: item.mobileNumber,
            Message: item.message,
            Date: new Date(item.createdAt).toLocaleString(),
          }))
        );
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
        XLSX.writeFile(workbook, "Contacts_Export.xlsx");
      }
    } catch (error) {
      console.error("Export failed", error);
    }
  };

  const handleLogout = () => {
    // Clear cookie by setting it to expire in the past
    document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/admin/login");
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Admin Dashboard</h1>
        <div className={styles.actions}>
          <button onClick={handleExport} className={styles.exportBtn}>
            Export to Excel
          </button>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </header>

      <div className={styles.controls}>
        <label>
          Rows per page:
          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1); // Reset to page 1 on limit change
            }}
            className={styles.select}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </label>
        <span className={styles.count}>Total Records: {total}</span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.fullName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobileNumber}</td>
                  <td>{contact.message}</td>
                  <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
            {!loading && contacts.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={styles.pageBtn}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage(page + 1)}
          className={styles.pageBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
}
