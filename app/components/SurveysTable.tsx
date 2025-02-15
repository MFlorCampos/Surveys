"use client";

import { Table, Button, Box, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Survey } from "../types";
import { SurveyModal } from "./SurveyModal";

const columnHelper = createColumnHelper<Survey>();

export function SurveysTable({ data }: { data: Survey[] }) {
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewClick = (survey: Survey) => {
    setSelectedSurvey(survey);
    setIsModalOpen(true);
  };

  const table = useReactTable({
    data,
    columns: [
      columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "#",
      }),
      columnHelper.accessor("title", {
        cell: (info) => info.getValue(),
        header: "Title",
      }),
      columnHelper.accessor("stepsNumber", {
        cell: (info) => info.getValue(),
        header: "Steps Number",
      }),
      columnHelper.display({
        id: "actions",
        cell: (info) => (
          <Button
            size="sm"
            colorScheme="blue"
            onClick={() => handleViewClick(info.row.original)}
          >
            View
          </Button>
        ),
        header: "Action",
      }),
    ],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {selectedSurvey && (
        <SurveyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          survey={selectedSurvey}
        />
      )}
    </>
  );
}
