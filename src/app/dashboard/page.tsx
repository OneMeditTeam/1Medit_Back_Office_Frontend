'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/common/Table';
import { Button } from '@/components/common/Button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { Input } from '@/components/common/Input';
import { Paperclip } from 'lucide-react';

const data = Array(8).fill({
  id: 250,
  category: '공지사항',
  title: '루시드 eXpert 약관개정 안내',
  date: '2023.04.01',
});

const Dashboard = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id],
    );
  };
  const modifiedData = data.map((item, index) => ({
    ...item,
    id: index + 1, // id 값을 1부터 증가
  }));
  return (
    <div className="p-6">
      {/* 인풋 예시 */}
      <div className="mb-8 p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Input inputWidth="w221" placeholder="w221" />
          </div>

          <div className="space-y-2">
            <Input inputWidth="w190" placeholder="w190" type="password" />
          </div>

          <div className="space-y-2">
            <Input inputWidth="w167" defaultValue="w167" />
          </div>

          <div className="space-y-2">
            <Input inputWidth="w167" defaultValue="readonly" readOnly />
          </div>

          <div className="space-y-2">
            <Input inputWidth="w234" type="email" placeholder="w234" />
          </div>

          <div className="space-y-2">
            <Input inputWidth="w358" type="email" placeholder="w358" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Input inputWidth="w190" type="number" placeholder="w190" />
            </div>
          </div>

          <div className="space-y-2 col-span-2">
            <Input inputWidth="w598" placeholder="w598" />
          </div>
          <div className="space-y-2 col-span-3">
            <Input inputWidth="w1130" placeholder="w1130" />
          </div>
        </div>
      </div>
      {/* 테이블 상단 */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-base font-medium text-[#666D74]">전체:333</span>
        <div className="flex gap-2">
          {/* 버튼 예시 */}
          <Button variant="primary" size="lg">
            primary
          </Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="outline">outline</Button>
          <Button variant="danger" size="lg">
            danger
          </Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="outline" size="sm">
            ✏️ 글쓰기
          </Button>
          <Button variant="outline" size="sm">
            ❌ 삭제하기
          </Button>
        </div>
      </div>

      {/* 테이블 */}
      <Table>
        <colgroup>
          <col width="5%" />
          <col width="5%" />
          <col width="15%" />
          <col width="55%" />
          <col width="10%" />
          <col width="5%" />
          <col width="5%" />
        </colgroup>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead className="min-w-16">번호</TableHead>
            <TableHead>게시판분류</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>작성일</TableHead>
            <TableHead>수정</TableHead>
            <TableHead>삭제</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {modifiedData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  onCheckedChange={() => toggleRow(item.id)}
                  checked={selectedRows.includes(item.id)}
                />
              </TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="cursor-pointer hover:underline text-left">
                <Paperclip size={18} color="#9FA5AD" className="inline mr-2" />
                <span>{item.title}</span>
              </TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  수정
                </Button>
              </TableCell>
              <TableCell>
                <Button size="sm" variant="secondary">
                  삭제
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 페이지네이션 */}
      <Pagination className="flex justify-center mt-4">
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
};

export default Dashboard;
