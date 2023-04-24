'use client';

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'หน้าแรก',
    icon: GiBoatFishing,
    description: 'This School Website',
    url: '/',
  },

  {
    label: 'เว็บ ร.ร.',
    icon: TbBeach,
    description: 'This School Website',
    url: 'https://www.google.com',
  },
  {
    label: 'แฟนเพจ ร.ร.',
    icon: GiWindmill,
    description: 'This School Website',
    url: 'https://www.facebook.com',
  },
  {
    label: 'ตารางเรียน',
    icon: MdOutlineVilla,
    description: 'This School Website',
    url: 'https://www.google.co.th/intl/th/drive',
  },
  {
    label: 'ปฎิทินวิชาการ',
    icon: TbMountain,
    description: 'This School Website',
    url: 'https://www.google.co.th/intl/th/drive',
  },
  {
    label: 'ดูเกรด',
    icon: GiIsland,
    description: 'This School Website',
    url: 'https://sgs6.bopp-obec.info/sgss/security/signin.aspx',
  },
  {
    label: 'ช้าง',
    icon: FaSkiing,
    description: 'This School Website',
    url: 'https://www.google.com',
  },
  {
    label: 'ม้า',
    icon: GiCastle,
    description: 'This School Website',
    url: 'https://www.google.com',
  },
  {
    label: 'วัว',
    icon: GiCaveEntrance,
    description: 'This School Website',
    url: 'https://www.google.com',
  },
  {
    label: 'ควาย',
    icon: GiForestCamp,
    description: 'This property offers camping activities!'
  }

]

const Categories = () => {


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
            url={item.url}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;