import { connect } from "react-redux";
import Head from "next/head";
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import styles from "./Dashboard.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SlideShowModule = dynamic(() => import("@/components/component/slideshow"));
const ListViewModule = dynamic(() => import("@/components/component/listview"));

const wisata = [
    {
        id: 1,
        source: "/assets/images/wisata_a.jpeg"
    },
    {
        id: 2,
        source: "/assets/images/wisata_b.jpeg"
    },
    {
        id: 3,
        source: "/assets/images/wisata_c.jpeg"
    },
    {
        id: 4,
        source: "/assets/images/wisata_d.jpeg"
    }
];
const region = [
    {
        value: "ALL",
        active: true
    },
    {
        value: "JAKARTA",
        active: false
    },
    {
        value: "YOGYAKARTA",
        active: false
    },
    {
        value: "JAWA TENGAH",
        active: false
    },
    {
        value: "JAWA TIMUR",
        active: false
    },
    {
        value: "JAWA BARAT",
        active: false
    },
    {
        value: "BALI",
        active: false
    }];
const destination = [
    {
        title: "Wisata Gunung Api",
        source: "/assets/images/wisata_d.jpeg",
        location: "Gunung Kidul, Yogyakarta"
    },
    {
        title: "Wisata Pantai",
        source: "/assets/images/wisata_c.jpeg",
        location: "Semarang, Jawa Tengah"
    },
    {
        title: "Wisata Pemandian",
        source: "/assets/images/wisata_g.jpeg",
        location: "Semarang, Jawa Tengah"
    },
    {
        title: "Wisata Museum",
        source: "/assets/images/wisata_f.jpeg",
        location: "Semarang, Jawa Tengah"
    },
    {
        title: "Wisata Hutan Alam",
        source: "/assets/images/wisata_a.jpeg",
        location: "Semarang, Jawa Tengah"
    },
    {
        title: "Wisata Danau Purba",
        source: "/assets/images/wisata_e.jpeg",
        location: "Semarang, Jawa Tengah"
    },
    {
        title: "Wisata Air Terjun",
        source: "/assets/images/wisata_b.jpeg",
        location: "Semarang, Jawa Tengah"
    }
];
const DashboardScreen = () => {
    const router = useRouter();
    const toPayment = () => {
        router.push("/payment")
    }
    return (
        <>
            <Head>
                <title>Dashboard Mitra Kasih Perkasa</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className={styles.header}>
                    <input type="input" className={styles.titleDashboard} placeholder="Cari pariwisata atau lokasi wisata" />
                    <div className={styles.searchWrapper}>
                        <SearchIcon style={{ color: "#3599e6" }} />
                    </div>
                </div>
                <div className={styles.historyPayment}>
                    <div className={styles.boxHistory} onClick={() => toPayment()}>
                        <ShoppingCartIcon style={{ color: "#3599e6", fontSize: "16px", fontWeight: "bold" }} />
                        <p className={styles.textHistory}>History Pembelian</p>
                    </div>
                </div>
                <div className={styles.region}>
                    {
                        region.map((item, index) => {
                            return (
                                <span key={index} className={styles.itemRegion}>
                                    {item.value}
                                    {
                                        item.active ? <div className={styles.regActive} /> : null
                                    }
                                </span>
                            )
                        })
                    }
                </div>
                <SlideShowModule data={wisata} styles={styles} />
                <ListViewModule data={destination} styles={styles} title="Destinasi Terbaik" />
                <ListViewModule data={destination} styles={styles} title="Pencarian Terakhir" />
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
export default connect(mapStateToProps)(DashboardScreen);