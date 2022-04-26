import MyLocationIcon from '@mui/icons-material/MyLocation';
import Image from 'next/image'

const ListView = ({data, styles, title}) => {
    return (
        <div className={styles.productWrapper}>
            <p className={styles.labelProduct}>{title}</p>
            <div className={styles.listProductWrapper}>
                {
                    data.map((item, index) => {
                        return (
                            <div className={styles.cardProduct} key={index}>
                                <div className={styles.flexItem}>
                                    <Image
                                        src={item.source}
                                        className={styles.cardSlide}
                                        key={index}
                                        width="150"
                                        height="150"
                                    />
                                    <p style={{
                                        fontSize: "12px",
                                        textAlign: "left",
                                        fontWeight: "bold"
                                    }}>{item.title}</p>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        overflow: "hidden",
                                        marginTop: "-10px",
                                        width: "130px",
                                    }}>
                                        <MyLocationIcon style={{ fontSize: "10px", color: "purple", marginRight: "3px" }} />
                                        <p style={{
                                            fontSize: "8px",
                                            textAlign: "left",
                                        }}>{item.location}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListView