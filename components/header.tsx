import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import {
  HomeIcon,
  ChevronDownIcon,
  SearchIcon,
  UserCircleIcon,
  PencilIcon
} from "@heroicons/react/solid";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: 0,
        background: "black",
        zIndex: 50,
        width: "100vw",
        left: 0,
      }}
    >
      <div style={{ height: 50, width: 50, position: "relative" }}>
        <Image src="/bonk.jpg" fill style={{ objectFit: "contain" }} alt="" />
      </div>
      <div
        style={{
          height: 50,
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
          display: "flex",
        }}
      >
        <HomeIcon style={{ height: 30, width: 30 }} />
        <p>All Categories</p>
        <ChevronDownIcon style={{ height: 30, width: 30 }} />
      </div>
      <form style={{ display: "flex", alignItems: "center" }}>
        <SearchIcon style={{ height: 20, width: 20 }} />
        <input type="text" placeholder="Search Requests" />
        <button type="submit" style={{ display: "none" }} />
      </form>

      
      <div style={{position:"absolute",display:"flex", right:0}}>
        
      <div
        style={{
          height: 50,
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
          display: "flex",
        }}
      >
        <PencilIcon style={{ height: 30, width: 30 }} />
        <p>Submit Request</p>
      </div>

      <div
        style={{
          height: 50,
          alignItems: "center",
          marginLeft: 20,
          marginRight: 20,
          display: "flex",
        }}
      >
        <UserCircleIcon style={{ height: 30, width: 30 }} />
      </div>

        <div className={styles.wallet_button_container}>
          <WalletMultiButton
            className={styles.wallet_button + " btn btn-ghost mr-4"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
