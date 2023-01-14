import React, {useState} from 'react';
import Button from "@mui/material/Button";
import "../scss/HomePage.scss";
import {v4 as uuid} from "uuid";


function AddUserComponent({data, setData}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        noHp: ""
    })

    const handleChangeInput = (e) => {
        let data = {...formData};
        data[e.target.name] = e.target.value;
        setFormData(data);
    }

    const handleAddUserBtn = (e) => {
        e.preventDefault();
        if(formData.name === "") {
            return false;
        }
        if(formData.email === "") {
            return false;
        }
        if(formData.noHp === "") {
            return false;
        }

        let dataList = [...data]
        dataList.push({id: uuid(), name: formData.name, email: formData.email, noHp: formData.noHp})
        setData(dataList);
    }
    return (
        <div className="my-6">
            <form onSubmit={handleAddUserBtn}>
                <input className="input" onChange={handleChangeInput} width="50em" name="name" placeholder="masukkan nama lengkap" value={formData.name}/>
                <input className="input" onChange={handleChangeInput} name="email" placeholder="masukkan email" value={formData.email}/>
                <input className="input" onChange={handleChangeInput} name="noHp" placeholder="masukkan nomor hp" value={formData.noHp}/>

                <Button
                    type="submit"
                    sx={{width: "15em",
                        paddingY: "1.1em",
                        backgroundColor: "#3b82f6",
                        color: "black"
                    }}
                    variant="outlined">Tambah
                </Button>
            </form>
        </div>
    );
}

export default AddUserComponent;