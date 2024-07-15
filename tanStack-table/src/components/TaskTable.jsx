import { Box } from "@chakra-ui/react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import DATA from "../data";

const columns = [
  {
    accessorKey: "task",
    header: "Task",
    cell: ({ value }) => <p>{value}</p>,
  },
  {
    accessorKey: "status",
    header: "STATUS_TESTING",
    cell: ({ value }) => <p>{value}</p>,
  },
  {
    accessorKey: "due",
    header: "Due Date",
    cell: ({ value }) => <p>{value}</p>,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ value }) => <p>{value}</p>,
  },
];

const TaskTable = () => {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getHeaderGroups());
  return (
    <Box>
      <Box className="table">
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" key={header.id}>
                {header.column.columnDef.header}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default TaskTable;
