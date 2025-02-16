"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageSquare,
  LayoutDashboard,
  Users,
  Store,
  BarChart,
  Inbox,
} from "lucide-react";

const menuItems = [
  { title: "화면 관리", icon: LayoutDashboard },
  { title: "회원 관리", icon: Users },
  { title: "입점 관리", icon: Store },
  { title: "매출 관리", icon: BarChart },
  { title: "리뷰 관리", icon: MessageSquare },
  { title: "문의 관리", icon: Inbox },
];

export default function LeftNavigationBar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4 block">
      {/* 로고 */}
      <h2 className="text-xl font-semibold mb-4">루시드 eXpert</h2>

      {/* Sidebar Menu */}
      <Accordion type="multiple" className="w-full">
        {menuItems.map(({ title, icon: Icon }) => (
          <AccordionItem key={title} value={title}>
            <AccordionTrigger className="flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                <span>{title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="ml-8 text-sm text-gray-400">
              <p className="py-2 hover:text-white cursor-pointer">서브메뉴 1</p>
              <p className="py-2 hover:text-white cursor-pointer">서브메뉴 2</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}
