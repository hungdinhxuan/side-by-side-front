import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import "../../Styles/Setting.css";
import { Link } from "react-router-dom";
import GeneralSetting from "./GeneralSetting";
import SecuritySetting from "./SecuritySetting";
import WalletSetting from "./WalletSetting";
import BlockList from "./BlockList";
import '../../Styles/Setting.css'

export const Setting = ({route}) => {
  return (
    <>
      <div>
      <div className="sidebar">
        <a  >
        <Link to="/setting/general">Cài đặt chung</Link>
        </a>
        <a >
        <Link to="/setting/wallet"> Cài đặt ví</Link>
        </a>
        <a >
        <Link to="/setting/security">Cài đặt bảo mật</Link>
        </a>
        <a >
        <Link to="/setting/blocklist">Danh sách chặn</Link>
        </a>
        
        
        
      </div>
      </div>
      <div class="content">
        {route === "general" && <GeneralSetting /> }
        {route === "security" && <SecuritySetting /> }
        {route === "wallet" && <WalletSetting /> }
        {route === "blocklist" && <BlockList /> }
      </div>
    </>
  );
};

export default Setting;
