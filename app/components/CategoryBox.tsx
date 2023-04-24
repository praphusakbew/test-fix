'use client';
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
interface CategoryBoxProps {
  icon: IconType,
  label: string;
  selected?: boolean;
  url?: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  url,
}) => {

  const router = useRouter();


  const handleClick = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <div
      className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
      onClick={handleClick}
    >
      <Icon size={26} />
      <div className="flex font-medium text-sm text-center whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}
export default CategoryBox;