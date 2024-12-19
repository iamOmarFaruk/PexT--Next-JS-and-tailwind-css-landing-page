import LogosSubsection from "@/app/components/LogosSubsection";
import StatsSubsection from "@/app/components/StatsSubsection";

import { ClientsAndStatsProps } from "@/app/types"; // Import the type

const ClientsAndStats: React.FC<ClientsAndStatsProps> = ({ logos, stats }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="container mx-auto md:px-8">
          <LogosSubsection logos={logos} />
        </div>
        <StatsSubsection stats={stats} />
      </div>
    </section>
  );
};

export default ClientsAndStats;
