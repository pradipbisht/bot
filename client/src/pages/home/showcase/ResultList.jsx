import { TrendingUp, Users, DollarSign } from "lucide-react";

const ResultsList = () => {
  const results = [
    {
      icon: TrendingUp,
      text: "320% organic traffic growth",
      color: "text-emerald-600",
    },
    {
      icon: Users,
      text: "45% increase in lead conversion",
      color: "text-blue-600",
    },
    {
      icon: DollarSign,
      text: "Reduced CPC by 28%",
      color: "text-purple-600",
    },
  ];

  return (
    <ul className="space-y-4 mb-8">
      {results.map((result, index) => (
        <li key={index} className="flex items-center group">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-4 group-hover:bg-teal-50 transition-colors duration-300">
            <result.icon className={`w-5 h-5 ${result.color}`} />
          </div>
          <span className="text-gray-700 font-medium">{result.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default ResultsList;
