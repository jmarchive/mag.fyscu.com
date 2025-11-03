import { Data } from "./App";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import styles from "./List.module.css";
import { Document, Page } from "react-pdf";
import { useMemo } from "react";
import { getPx } from "../util";

type Props = {
    data :Data[];
    cb :(id :number)=>void;
};

type ItemProps = {
    data :Data;
    cb :(id :number)=>void;
};

export default function List(props :Props){
    return(<section className={styles.outer}>
        {props.data.map(value=><ListItem data={value} cb={props.cb} key={value.id} />)}
        {props.data.length === 0 ? "加载杂志数据中……" : null}
    </section>);
}

function ListItem(props :ItemProps){
    const {data} = props, _25dvw = useMemo(()=>getPx("25dvw"), []);
    return(<button className={styles.itemOuter} onClick={()=>props.cb(data.id)}>
        <Document file={`https://mag.feiyang.ac.cn/pdfs/${data.filename}`} loading={"加载杂志数据中……"}>
            <Page pageNumber={1} height={_25dvw} />
        </Document>
        <div>{data.year} 年第 {data.index} 期：{data.name}</div>
        <div>{data.description}</div>
        <div className={styles.uploadTime}>发布于 {data.upload_time}</div>
    </button>);
}