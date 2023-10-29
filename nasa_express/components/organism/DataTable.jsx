import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const DataTable = ({ data }) => {
  const itemsPerPage = 2; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left p-3">Pick Up</th>
            <th className="text-left p-3">Destination</th>
            <th className="text-left p-3">Amount Spent (Nasa Token)</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-3">{item.pickup}</td>
              <td className="p-3">{item.destination}</td>
              <td className="p-3">{item.amountSpent.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default DataTable;
