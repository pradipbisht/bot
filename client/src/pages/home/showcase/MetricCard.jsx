const MetricsCard = () => {
  const metrics = [
    { label: "Traffic", value: "+320%", color: "text-emerald-600" },
    { label: "Leads", value: "+45%", color: "text-blue-600" },
    { label: "CPC", value: "-28%", color: "text-purple-600" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
            <div className={`text-2xl font-bold ${metric.color}`}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-gray-600 font-medium">Client: Acme Corp</p>
            <p className="text-gray-500">Duration: 6 months</p>
          </div>
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
            <span className="text-teal-600 font-bold text-lg">A</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;

