import React, {useState} from 'react';
import "../scss/HomePage.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import dataApi from "../DataDummy/DataApi";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import AddUserComponent from "./AddUserComponent";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function HomePage() {
    const [data, setData] = useState(dataApi);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteBtn = (item) => {
        let dataList = [...data];
        let filterData = dataList.filter(contact => contact.id !== item.id)
        setData(filterData);
        alert("Anda yakin hapus??")
    }

    return (
        <div className="container-home-page">
            <div className="content flex flex-col justify-center shadow-md rounded-lg">
                <span className="text-center text-3xl font-bold">
                    Kontak Pribadi</span>

                <AddUserComponent data={data} setData={setData}/>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{border: 2}}>
                                <TableCell align="center" sx={{fontWeight: "bold"}}>Nama Lengkap</TableCell>
                                <TableCell align="center" sx={{fontWeight: "bold"}}>Email</TableCell>
                                <TableCell align="center" sx={{fontWeight: "bold"}}>No.Handphone</TableCell>
                                <TableCell align="center" sx={{fontWeight: "bold"}}>Aksi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.id}
                                          sx={{border: 2}}>
                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">{item.email}</TableCell>
                                    <TableCell align="center">{item.noHp}</TableCell>
                                    <TableCell>
                                        <div className="space-x-4 flex justify-center">
                                            <IconButton onClick={handleClickOpen}>
                                                <VisibilityIcon color="success"/>
                                            </IconButton>

                                            <IconButton onClick={() => handleDeleteBtn(item)}>
                                                <DeleteIcon sx={{color: "#e11d48"}}/>
                                            </IconButton>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Dialog
                    open={open}
                    fullWidth="true"
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <div className="bg-emerald-100 flex flex-col space-y-5 justify-center
                     items-center py-8">
                        <div className="flex flex-row">
                            <span className="text-lg">Nama</span>
                            <span className="mx-4">:</span>
                            <span className="text-lg font-bold">Tiarro Elprida Tamba</span>
                        </div>

                        <div className="flex flex-row">
                            <span className="text-lg">Nomor Hp</span>
                            <span className="mx-4">:</span>
                            <span className="font-bold">082273231323</span>
                        </div>

                        <div className="flex flex-row">
                            <span className="text-lg">Email</span>
                            <span className="mx-4">:</span>
                            <span className="font-bold">tiarrotamba24@gmail.com</span>
                        </div>

                        <div className="flex flex-row">
                            <span className="text-lg">Address</span>
                            <span className="mx-4">:</span>
                            <span className="font-bold">Medan</span>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    );
}

export default HomePage;