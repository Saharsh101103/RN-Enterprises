"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { MoveHorizontalIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

// Define the type for each message
interface Message {
  id: number;
  customerName: string;
  email: string;
  date: string;
  status: string;
  message: string;
}

// Define the props for the component
interface MessageTableProps {
  messages: Message[];
}



const MessageTable: React.FC<MessageTableProps> = ({ messages }) => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <div>
      <div className="border shadow-sm rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order</TableHead>
              <TableHead className="min-w-[150px]">Customer</TableHead>
              <TableHead className="hidden md:table-cell">Channel</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((obj) => (
              <TableRow key={obj.id}>
                <TableCell>{obj.id}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {obj.customerName}
                </TableCell>
                <TableCell className="hidden md:table-cell">{obj.email}</TableCell>
                <TableCell className="hidden md:table-cell">{obj.date}</TableCell>
                <TableCell className="hidden sm:table-cell">{obj.status}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => setOpenDialog(obj.id)}>
                        Open Dialog
                      </DropdownMenuItem>
                      <DropdownMenuItem>Mark as read</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Dialog is outside the DropdownMenu */}
                  <Dialog open={openDialog === obj.id} onOpenChange={() => setOpenDialog(null)}>
                    <DialogTrigger asChild>
                      <div />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="border-b border-secondary pb-4 text-xl">
                          {obj.customerName}
                        </DialogTitle>
                        <DialogDescription className="border border-secondary p-4 text-lg text-start rounded-2xl text-secondary">
                          {obj.message}
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button onClick={() => setOpenDialog(null)} variant={"destructive"}>
                          Close
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MessageTable;
