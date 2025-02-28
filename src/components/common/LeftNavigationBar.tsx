'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { menuItems } from '@/constants/menuItem';

const LeftNavigationBar = () => {
  return (
    <aside className="block w-64 h-screen p-4 text-white bg-gray-900">
      {/* 로고 */}
      <h2 className="mb-4 text-xl font-semibold">루시드 eXpert</h2>

      {/* Sidebar Menu */}
      <Accordion type="multiple" className="w-full">
        {menuItems.map(({ title, icon: Icon }) => (
          <AccordionItem key={title} value={title}>
            <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-left rounded-lg hover:bg-gray-800">
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                <span>{title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-8 text-sm text-gray-400">
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
