const QueueDisplay = ({ queue = [], onRemove }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "bg-red-100 text-red-700";
      case "serving":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Current Queue</h2>

      {queue.length === 0 ? (
        <p className="text-gray-500 text-center">No customers in queue</p>
      ) : (
        <div className="space-y-3">
          {queue.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm"
            >
              <div>
                <p className="font-medium">{customer.name}</p>
                <span
                  className={`text-sm px-2 py-1 rounded ${getStatusColor(
                    customer.status
                  )}`}
                >
                  {customer.status}
                </span>C
              </div>

              <button
                onClick={() => onRemove(customer.id)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueueDisplay;
