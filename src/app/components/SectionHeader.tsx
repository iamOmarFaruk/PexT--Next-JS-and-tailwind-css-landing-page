import { SectionHeaderProps } from "@/app/types"; // Import the type
const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-[600px] w-full text-center mx-auto px-4  mb-12 lg:mb-16">
      <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default SectionHeader;
