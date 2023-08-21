'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { MdSingleBed, MdBed, MdKingBed } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
      label: "Single",
      icon: MdSingleBed,
      description: 'This room only provides one bed for one person'
  },
  {
      label: "Double",
      icon: MdBed,
      description: 'This room provides one large bed that can be occupied for two person'
  },
  {
      label: "King",
      icon: MdKingBed,
      description: 'This room provides a bed that is slightly larger than a double bed and can accommodate up to 4 person'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;