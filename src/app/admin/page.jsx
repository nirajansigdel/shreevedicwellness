"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TableDemo() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/order");
        const onlyCompleted = response.data.filter(
          (order) => order.payment_status === "COMPLETED"
        );
        setOrders(onlyCompleted);
        console.log({ response });
      } catch (error) {
        console.error({ error });
      }
    };

    fetchOrders();
  }, []);

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  }

  const pageCount = Math.ceil(orders.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = orders.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex p-10 md:p-0  flex-col items-center space-y-8 justify-center h-screen">
      <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#4B5563]">
        Orders
      </p>
      {/* <span>List of your orders</span> */}

      <div className="border  w-full md:w-3/5 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6  py-3 text-left text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-500 uppercase tracking-wider">
                Class
              </th>
              <th className="px-6 py-3 text-left text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-500 uppercase tracking-wider">
                Class Type
              </th>
              <th className="px-6 py-3 text-left text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-500 uppercase tracking-wider">
                Client Name
              </th>
              <th className="px-6 py-3 text-left text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-500 uppercase tracking-wider">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((invoice, idx) => (
              <tr key={idx} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-900">
                  {invoice.class}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
                  {invoice.class_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
                  {invoice.client_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
                  {invoice.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
                  {formatDate(invoice.createdAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

function Pagination({ pageCount, currentPage, onPageChange }) {
  return (
    <div className="pagination  flex gap-5">
      {Array.from({ length: pageCount }).map((_, index) => (
        <button
          key={index}
          className={`pagination-button ${
            currentPage === index ? "active font-bold" : ""
          }`}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
