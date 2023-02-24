
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";



export const Janken = () => {

    

    const [jankenResult, setJankenResult] = useState({
        myHand: "入力待ち",
        comHand: "待機中",
        result: "未対戦",
    });

    const [history, setHistory] = useState([]);



    

    // 自分の手を入力して「自分の手、相手の手、勝敗」を持ったオブジェクトを出力する関数
    const getJankenResult = (myHand) => {
        const hand = ["グー", "チョキ", "パー"];
        // 配列的には０，１，２
        const myIndex = hand.indexOf(myHand);
        // IndexOf文字列を検索して表示
        const comIndex = Math.floor(Math.random() * 3);
        const resultSheet = [
            ["引き分け", "勝ち", "負け"],
            ["負け", "引き分け", "勝ち"],
            ["勝ち", "負け", "引き分け"],
        ];

     

        return {
            myHand: myHand,
            comHand: hand[comIndex],
            result: resultSheet[myIndex][comIndex],
        };



    };

    const getJanken = (myHand) => {
        const result = getJankenResult(myHand);
        setJankenResult(result);
        setHistory([result, ...history]);

    };
    

    // スプレッド構文(...)
    // 結果と履歴の入った配列ができあがる
    return (
        <>
            <body className="text-center">
            <p>じゃんけんの画面</p>
            {/* `() => 関数名()` の形にする必要がある */}
            <ActionButton  text="グー" action={() => getJanken("グー")} />
            <ActionButton  text="チョキ" action={() => getJanken("チョキ")} />
            <ActionButton  text="パー" action={() => getJanken("パー")} />
            <p>
                {JSON.stringify(jankenResult)}
            </p>
            <p>自分の手：{jankenResult.myHand}</p>
            <p>相手の手：{jankenResult.comHand}</p>
            <p>結果：{jankenResult.result}</p>
            <p>履歴</p>
            
            <table className="w-full">
                <thead>
                    <tr className="flex justify-center">
                        <th className="w-24">自分の手</th>
                        <th className="w-24">相手の手</th>
                        <th className="w-24">結果</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((x, i) => (
                        <tr key={i} className="flex justify-center ">
                            <td className="w-24">{x.myHand}</td>
                            <td className="w-24">{x.comHand}</td>
                            <td className="w-24">{x.result}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </body>
        </>
    );
};