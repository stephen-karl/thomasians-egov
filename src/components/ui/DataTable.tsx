import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IHeader {
  title: string;
  sortable: boolean;
}

interface IDataTable {
  header: IHeader[];
  className?: string;
  gridTemplateColumns?: string;
  children: ReactNode;
  paginator?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

interface ITableData {
  children: ReactNode;
  className?: string;
}  

interface ITableRow {
  children: ReactNode;
  className?: string;
  gridTemplateColumns?: string;
  index: number;
  onRowClick?: () => void;
}


const DataTable = ({
  header,
  className,
  gridTemplateColumns,
  children,
}: IDataTable) => {



  return (
    <table 
      className={ className + ` min-w-fit w-full h-full flex flex-col flex-shrink-0`}
    >
      <thead 
        className="w-full py-1 border-b border-gray-200 bg-gray-50 h-10 pr-4"
        
      >
        <tr
          className="grid grid-flow-col px-2 h-8 w-full "
          style={{gridTemplateColumns: gridTemplateColumns}}
        >
          {header.map((item, index) => (
            <td
              key={index}
              className=" w-full flex items-center justify-start gap-2 h-8 rounded-md px-4 uppercase text-left text-gray-500 text-sm font-normal"
            >
              {item.title}
            </td>
          ))}
        </tr>
      </thead>
      <tbody
        className="bg-white h-full flex-grow-0 overflow-y-scroll w-full"
        style={{ scrollbarGutter: 'stable left'}}
      >

        <tr className="flex flex-col w-full h-full">
          {children}
        </tr>
      </tbody>
      
    </table>
  )
}

const TableData = ({ 
  children,
  className
}: ITableData ) => {
  return (
    <div 
      className={className + "  flex-shrink-0 p-2 px-4 text-sm text-gray-700 font-normal flex items-center "}
    >
      {children}
    </div>
  )
}

const TableRow = ({ 
  children,
  className,
  gridTemplateColumns,
  index,
  onRowClick  
}: ITableRow ) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.td
      className={className + ` flex-shrink-0 px-2 grid grid-flow-col py-2 w-full  border-b border-gray-200 ${onRowClick && "cursor-pointer"} `}
      style={{ gridTemplateColumns: gridTemplateColumns }}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.05 }} 
      onClick={onRowClick}
    >
      {children}
    </motion.td>
  )
}

export { DataTable, TableData, TableRow };