import React, {useState, useEffect} from 'react';
import ChangePassword from "./SecuritySetting/ChangePassword";
import SettingPasswordLevel2 from "./SecuritySetting/SettingPasswordLevel2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        width : "50%",
        marginLeft: "25%",
        marginTop: "8%",
       
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
        <div className={classes.root} >
        <div >
            <button onClick={handleChangePasswordClick}>Change Password</button>
            <button onClick={handleSettingPasswordLevel2}>SettingPasswordLevel2</button>
        </div>
        <div>
            {changePassword && <ChangePassword/> }
            {settingPasswordLevel2 && <SettingPasswordLevel2 />}
        </div>
        </div>
    )
}

export default SecuritySetting
