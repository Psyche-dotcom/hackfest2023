const Modal = ({ pickup, destination }) => {
  function handleHome() {
    window.location.reload();
  }

  const info = `Your ride from ${pickup} to ${destination} has been successfully booked!`;

  return (
    <div className=" border-b-2 py-2 md:border-0">
      <div className="modal-overlay rounded-lg">
        <div className="relative">
          <div className="modal-content bg-white p-4 text-center">
            <p
              className="text-gray-700 m-8 font-semibold"
              style={{ fontSize: "18px" }}
            >
              {info}
            </p>
            <button
              onClick={handleHome}
              className="bg-mainc py-2 px-4 border-sm text-white font-bold"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
