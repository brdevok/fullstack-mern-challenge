import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box, TablePagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ChildrenTableData } from "../../../../../types/Home";
import ChildrenTableCells from "./ChildrenTableCells";

const ChildrenTable:React.FC<{childrenData:ChildrenTableData[]|undefined}> = ({childrenData}):JSX.Element => {

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [cells, setCells] = useState<JSX.Element[]>([]);

    const switchPage = (e:any, page:number) => {

        setCurrentPage(page);

    }

    const fillTable = () => {

        if (childrenData !== undefined && childrenData.length > 0) {
            const startIndex = currentPage === 0 ? 0 : currentPage * 10;
            const endIndex = childrenData.length >= startIndex + 10 ? startIndex + 10 : childrenData.length;

            setCells(childrenData.slice(startIndex, endIndex).map((childData, i) => {
                return <ChildrenTableCells key={i} childData={childData}/>
            }))
        }

    }

    useEffect(() => fillTable(), [childrenData, currentPage]);

    return(
        <Box>

            <TablePagination
                component="div"
                count={childrenData ? childrenData.length : 0}
                page={currentPage}
                onPageChange={switchPage}
                rowsPerPage={10}
                rowsPerPageOptions={[]}
            />

            <TableContainer>
                <Table sx={{ minWidth: "100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Document</TableCell>
                            <TableCell align="right">Tools</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        childrenData !== undefined && childrenData.length > 0
                            ? cells
                            : <TableRow>
                                <TableCell align="left">No children</TableCell>
                                <TableCell/>
                                <TableCell/>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            
            <TablePagination
                component="div"
                count={childrenData ? childrenData.length : 0}
                page={currentPage}
                onPageChange={switchPage}
                rowsPerPage={10}
                rowsPerPageOptions={[]}
            />

        </Box>
    );

}

export default ChildrenTable;