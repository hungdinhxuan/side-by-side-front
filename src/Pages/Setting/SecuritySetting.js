
import ChangePassword from "./SecuritySetting/ChangePassword";
import SettingPasswordLevel2 from "./SecuritySetting/SettingPasswordLevel2";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";


const useStyles = makeStyles((theme) => ({
    root : {
        width : "50%",
        margin : "auto",
        backgroundColor : "white",
    }
}));

const SecuritySetting = () => {
    
    const classes = useStyles();
    const [changePassword, setChangePassword] = useState(true);
    const [settingPasswordLevel2, setSettingPasswordLevel2] = useState(false);

    const handleChangePasswordClick = () => {
        setChangePassword(true);
        setSettingPasswordLevel2(false);
    }

    const handleSettingPasswordLevel2 = () => {
        setChangePassword(false);
        setSettingPasswordLevel2(true);
    }

    return (
        <div className={classes.root} style={{border: '1px solid #ea7c69',padding: "0 5px", marginTop: "20px"}}>
        <div className="text-center mt-2 security-password">
            <button className="btn btn-primary ps1" onClick={handleChangePasswordClick}>Change Password</button>
            <button className="btn btn-primary ps2" style={{marginLeft: "10px"}} onClick={handleSettingPasswordLevel2}>SettingPasswordLevel2</button>
        </div>
        <div className="mt-3">
            {changePassword && <ChangePassword/> }
            {settingPasswordLevel2 && <SettingPasswordLevel2 />}
            
        </div>
        </div>
    )
}

export default SecuritySetting
