import React from "react";
import { TableRow, TableCell, Link, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ROUTES from "../../../assets/ROUTES";
import axios from "axios";
import { DeleteProfileSubmitResponse } from "../../../../../types/DeleteProfile";
import { ChildrenTableData } from "../../../../../types/Home";

const ChildrenTableCells:React.FC<{childData:ChildrenTableData}> = ({childData}):JSX.Element => {

    const deleteCell = async (id:string) => {

        const res = await axios.delete<DeleteProfileSubmitResponse>(`/api/children/${id}`);

        if (res.data.deleted) window.location.reload();

    }

    return(
        <TableRow>
            <TableCell align="left">{childData.name} {childData.surname}</TableCell>
            <TableCell align="left">{childData.document}</TableCell>
            <TableCell align="right">
                <Link href={`${ROUTES["EDIT_CHILD"]}/${childData._id}`}>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </Link>
                <IconButton onClick={() => deleteCell(childData._id)}>
                    <DeleteForeverIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    );

}

export default ChildrenTableCells;