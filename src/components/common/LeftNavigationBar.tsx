'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { menuItems } from '@/constants/menuItem';
import Image from 'next/image';

const LeftNavigationBar = () => {
  return (
    <aside className="block h-screen p-4 text-white bg-[#26282B] w-72">
      {/* 로고 */}
      <div className="flex items-center w-56 h-8 gap-2 my-12">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={30}
          height={30}
          priority
        />
        <h2 className="text-3xl font-semibold">루시드 eXpert</h2>
      </div>

      {/* Sidebar Menu */}
      <Accordion type="single" collapsible className="w-full">
        {menuItems.map(({ title, icon: Icon }) => (
          <AccordionItem
            key={title}
            value={title}
            className="data-[state=open]:bg-gray-700 rounded-lg group my-4"
          >
            <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-left rounded-lg group-data-[state=open]:text-blue-400">
              <div className="flex items-center gap-2 ">
                <Icon className="w-5 h-5" />
                <span>{title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-8 text-sm text-gray-400 ">
              <p className="py-2 cursor-pointer hover:text-white">서브메뉴 1</p>
              <p className="py-2 cursor-pointer hover:text-white">서브메뉴 2</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export default LeftNavigationBar;
