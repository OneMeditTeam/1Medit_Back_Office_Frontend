"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const data = Array(8).fill({
  id: 250,
  category: "공지사항",
  title: "루시드 eXpert 약관개정 안내",
  date: "2023.04.01",
});

export default function Dashboard() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      {/* 테이블 상단 */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">전체: 333</span>
        <div className="flex gap-2">
          <Button variant="outline" className="text-blue-500 border-blue-500">
            글쓰기
          </Button>
          <Button variant="outline" className="text-red-500 border-red-500">
            삭제하기
          </Button>
        </div>
      </div>

      {/* 테이블 */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-200 dark:bg-gray-800">
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>번호</TableHead>
            <TableHead>게시판분류</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>작성일</TableHead>
            <TableHead>수정</TableHead>
            <TableHead>삭제</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox
                  onCheckedChange={() => toggleRow(item.id)}
                  checked={selectedRows.includes(item.id)}
                />
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="text-blue-400 cursor-pointer hover:underline">
                {item.title}
              </TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  수정
                </Button>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="destructive">
                  삭제
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 페이지네이션 */}
      <Pagination className="mt-4 flex justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
