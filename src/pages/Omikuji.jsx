import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Omikuji = () => {
    const [omikujiResult, setOmikujiResult] = useState("");

    const getOmikuji = () => {
        const result = ["大吉", "中吉", "小吉", "凶", "大吉"][
            Math.floor(Math.random() * 5)
        ];
        console.log(result);
        setOmikujiResult(result);
    };

    return (
        <>
            <body className="text-center">
                 <p>おみくじの画面</p>
            <ActionButton text="おみくじをひく" action={getOmikuji} />
            <p>{omikujiResult}</p>
            </body>
           
        </>
    );
};