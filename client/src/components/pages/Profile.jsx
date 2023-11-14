import React from 'react';
import styles from "../../styles/Profile.module.css";
import { } from "@material-ui/icons";
import Sidebar from '../Sidebar.jsx';
import Topbar from "../Topbar.jsx";
import Feed from "../Feed.jsx";
import Rightbar from "../Rightbar.jsx";
import { useEffect, useState } from "react";
import axios from '../../utils/client.js';
import { useParams } from "react-router"

// "assets/forest.jpg" was in profile cover image
//"assets/rawData1.jpg" profile user image
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            console.log("feed rendered");
            const res = await axios.get(`/users?username=${username}`);
            //console.log(res);
            setUser(res.data);
        };
        fetchUser();
    }, [username]);

    return (
        <>
            <Topbar />
            <div className={styles.profile}>
                <Sidebar />
                <div className={styles.profileRight}>
                    <div className={styles.profileRightTop}>
                        <div className={styles.profileCover}>
                            <img
                                className={styles.profileCoverImage}
                                src={
                                    'https://i.pravatar.cc/300'
                                }
                                alt=""
                            />
                            <img
                                className={styles.profileUserImage}
                                src={
                                    'https://i.pravatar.cc/300'
                                }
                                alt=""
                            />
                        </div>
                        <div className={styles.profileInfo}>
                            <h4 className={styles.profileInfoName}>{user.username}</h4>
                            <h4 className={styles.profileInfoDesc}>{user.desc}</h4>

                        </div>
                    </div>
                    <div className={styles.profileRightBottom}>
                        {/* {username} */}
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}