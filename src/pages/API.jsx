import { useState, useEffect } from "react";
import axios from "axios";


export const Api = () => {
    const [cds, setCDs] = useState([]);
    // const [cd, setCD] = useState("");

    const getCDs = async (keyword) => {
        const apikey = ""
        const result = await axios.get(`https://app.rakuten.co.jp/services/api/BooksCD/Search/20170404?applicationId=${apikey}&artistName=${keyword}&formatVersion=2`);
        console.log(result.data);
        setCDs(result.data.Items ?? []);
    };


    
    // const selectCD = (cd) => {
    //     setCD(cd.Items.title);
    // };


    return (
        <>
            <p>音楽
            </p>
            <p></p>
            <p>キーワードで検索する</p>
            <input type="text" onChange={(e) => getCDs(e.target.value)} />
            {cds.map((x, i) => (
                <tr key={i}>
                    <td>
                        {/* <button type="button" onClick={() => selectCD(x)}>選択</button> */}
                    </td>
                    <td>{x.title}</td>
                    {/* <td>{x.volumeInfo.publisher}</td>
                    <td>{x.volumeInfo.publishedDate}</td> */}
                    <td>
                        {/* <a
                            href={x.volumeInfo.infoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Link
                        </a> */}
                    </td>
                </tr>
             ))} 
        </>
    );
};