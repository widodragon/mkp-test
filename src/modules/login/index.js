import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import { connect } from "react-redux";
import styles from "./Login.module.css";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BackspaceIcon from '@mui/icons-material/Backspace';

const LoginScreen = () => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState([
        {
            id: 1,
            value: ""
        },
        {
            id: 2,
            value: ""
        },
        {
            id: 3,
            value: ""
        },
        {
            id: 4,
            value: ""
        },
        {
            id: 5,
            value: ""
        },
        {
            id: 6,
            value: ""
        },
        {
            id: 7,
            value: ""
        },
        {
            id: 8,
            value: ""
        },
    ]);
    const router = useRouter();
    const selectKey = async (key) => {
        setLoading(true);
        //check if order array is empty
        if (password[0].value === "") {
            password[0] = {
                id: 1,
                value: key
            }
            await setPassword(password);
        } else if (password[1].value === "") {
            password[1] = {
                id: 2,
                value: key
            }
            await setPassword(password);
        } else if (password[2].value === "") {
            password[2] = {
                id: 3,
                value: key
            }
            await setPassword(password);
        } else if (password[3].value === "") {
            password[3] = {
                id: 4,
                value: key
            }
            await setPassword(password);
        } else if (password[4].value === "") {
            password[4] = {
                id: 5,
                value: key
            }
            await setPassword(password);
        } else if (password[5].value === "") {
            password[5] = {
                id: 6,
                value: key
            }
            await setPassword(password);
        } else if (password[6].value === "") {
            password[6] = {
                id: 7,
                value: key
            }
            await setPassword(password);
        } else if (password[7].value === "") {
            password[7] = {
                id: 8,
                value: key
            }
            await setPassword(password);
        }
        setLoading(false);
    }

    const removeKey = async () => {
        setLoading(true);
        //check if order array is empty
        if (password[7].value !== "") {
            password[7] = {
                id: 8,
                value: ""
            }
            await setPassword(password);
        } else if (password[6].value !== "") {
            password[6] = {
                id: 7,
                value: ""
            }
            await setPassword(password);
        } else if (password[5].value !== "") {
            password[5] = {
                id: 6,
                value: ""
            }
            await setPassword(password);
        } else if (password[4].value !== "") {
            password[4] = {
                id: 5,
                value: ""
            }
            await setPassword(password);
        } else if (password[3].value !== "") {
            password[3] = {
                id: 4,
                value: ""
            }
            await setPassword(password);
        } else if (password[2].value !== "") {
            password[2] = {
                id: 3,
                value: ""
            }
            await setPassword(password);
        } else if (password[1].value !== "") {
            password[1] = {
                id: 2,
                value: ""
            }
            await setPassword(password);
        } else if (password[0].value !== "") {
            password[0] = {
                id: 1,
                value: ""
            }
            await setPassword(password);
        }
        setLoading(false);
    }

    const toDashboard = () => {
        router.push("/dashboard");
    }

    if (loading) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Login Mitra Kasih Perkasa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <p className={styles.loginTitle}>Masukkan PIN Kartu Anda</p>
                <div className={styles.passwordContainer}>
                    {
                        password.map((item) => {
                            if (item.value === "") {
                                return (
                                    <div key={item.id} className={styles.passwordDot} />
                                )
                            } else {
                                return (
                                    <div key={item.id} className={styles.passwordDotFilled} />
                                )
                            }
                        })
                    }
                </div>
                <div className={styles.numWrapper}>
                    <div className={styles.keyboard}>
                        <div className={styles.number}>
                            <button className={styles.colNum} onClick={() => selectKey("1")}><i>1</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("2")}><i>2</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("3")}><i>3</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("4")}><i>4</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("5")}><i>5</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("6")}><i>6</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("7")}><i>7</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("8")}><i>8</i></button>
                            <button className={styles.colNum} onClick={() => selectKey("9")}><i>9</i></button>
                            <button className={styles.colNum} data-number="9">
                                <FingerprintIcon style={{ color: "#3599e6" }} />
                            </button>
                            <button className={styles.colNum} onClick={() => selectKey("0")}><i>0</i></button>
                            <button className={styles.colNum} onClick={() => removeKey()}>
                                <BackspaceIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonLoginWrapper}>
                    <button className={styles.buttonLogin} onClick={() => toDashboard()}>OK</button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    let { rootReducer } = state;
    return {
        ...rootReducer,
    };
};
export default connect(mapStateToProps)(LoginScreen);