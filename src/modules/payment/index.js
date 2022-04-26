import { connect } from "react-redux";
import Head from "next/head";
import { useRouter } from 'next/router'
import styles from "./Payment.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Divider from '@mui/material/Divider';

const history = [
    {
        name: "Pengunjung 1",
        items: [
            {
                name: "Tiket Masuk",
                detail: "10000 x 1",
                total: "10000"
            },
            {
                name: "Wahana 1",
                detail: "20000 x 1",
                total: "20000"
            }
        ]
    },
    {
        name: "Pengunjung 2",
        items: [
            {
                name: "Wahana 2",
                detail: "70000 x 1",
                total: "70000"
            }
        ]
    }
];
const PaymentScreen = () => {
    const router = useRouter();
    const backToDashboard = () => {
        router.back();
    }
    return (
        <>
            <Head>
                <title>Payment History Mitra Kasih Perkasa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className={styles.backHeader} onClick={() => backToDashboard()}>
                    <ArrowBackIcon style={{ color: "#3599e6" }} />
                    <p style={{
                        marginLeft: "10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#3599e6"
                    }}>Back</p>
                </div>
                <div className={styles.headerWrapperPayment}>
                    <div className={styles.paymentDate}>
                        <CalendarMonthIcon style={{ color: "white", fontSize: "18px", marginRight: "10px" }} />
                        <p style={{ color: "white", fontSize: "12px" }}>3 Oktober 2022</p>
                    </div>
                    <div className={styles.actionEditPay}>
                        <p style={{ color: "#3599e6", fontSize: "12px", textDecoration: "underline", cursor: "pointer" }}>Ubah</p>
                        <p style={{ color: "red", fontSize: "12px", textDecoration: "underline", cursor: "pointer" }}>Hapus</p>
                    </div>
                </div>
                <div className={styles.structWrapper}>
                    <p style={{ color: "black", fontSize: "15px", fontWeight: "bold", textAlign: "left", marginBottom: "50px" }}>Object Wisata Lawang Sewu</p>
                    {
                        history.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p style={{ color: "black", fontSize: "14px", textAlign: "left", fontWeight: "bold" }}>{item.name}</p>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        {
                                            item.items.map((value, idx) => {
                                                return (
                                                    <div style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "space-between",
                                                        alignItems: "center"
                                                    }}
                                                        key={idx}
                                                    >
                                                        <div style={{
                                                            display: "flex",
                                                            flexDirection: "column"
                                                        }}>
                                                            <p style={{ color: "black", fontSize: "13px", textAlign: "left" }}>{value.name}</p>
                                                            <p style={{ color: "black", fontSize: "13px", textAlign: "left" }}>{value.detail}</p>
                                                        </div>
                                                        <p style={{ color: "black", fontSize: "13px", textAlign: "left" }}>Rp. {value.total}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Divider style={{ fontSize: "20px" }} />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
                >
                    <p style={{ color: "black", fontSize: "15px", fontWeight: "bold", textAlign: "left" }}>Total Pembayaran</p>
                    <p style={{ color: "black", fontSize: "15px", fontWeight: "bold", textAlign: "left" }}>Rp 100000</p>
                </div>
                <div className={styles.footerWrapperPayment}>
                    <div style={{
                        position: "relative",
                        margin: "auto",
                        width: "95%"
                    }}>
                        <div className={styles.paymentDate}>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold", textAlign: "left" }}>Rp 100000,-</p>
                        </div>
                        <div className={styles.actionLanjut}>
                            <p style={{ color: "#3599e6", fontSize: "16px", textDecoration: "underline", cursor: "pointer", fontWeight: "bold" }}>Lanjut</p>
                            <ArrowForwardIcon style={{ color: "#3599e6", cursor: "pointer", fontSize: "20px", fontWeight: "bold", marginTop: "3px" }} />
                        </div>
                    </div>
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
export default connect(mapStateToProps)(PaymentScreen);