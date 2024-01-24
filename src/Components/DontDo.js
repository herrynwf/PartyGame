import React, { useState, useEffect  } from 'react';
export default function DontDo(){
    const words = [
        "大叫", "r痕", "講er", "拍手", "講快", "答應", "企起身", "閉眼多於一秒", "串人", "舉手指", "遞野", "舉手", "講係", "講酒", "報時",
        "拒絕接觸", "講開始", "講yeah", "扁嘴", "掂枱", "掂手機", "講(數字)", "答問題", "講飲", "un腳", "掂電話", "掂人地",
        "拍手", "講食野", "飲野", "講醉", "講(英文)", "歡呼", "講喂", "手掂臉", "翹手","講飲"
    ];
    
    const [randomWords, setRandomWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const shuffledWords = shuffleArray(words);
    setRandomWords(shuffledWords);
    }, []);

    const handleClick = () => {
    setCurrentIndex((prevIndex) => {
        if (prevIndex === randomWords.length - 1) {
        const shuffledWords = shuffleArray(words);
        setRandomWords(shuffledWords);
        return 0;
        } else {
        return prevIndex + 1;
        }
    });
    };

    const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
    };

    return (
    <div class="container">
        <button id="randomButton" onClick={handleClick}>唔淮</button>
        <p>{randomWords[currentIndex]}</p>
        <p>1. 做唔淮做的事 自己一個</p>
        <p>2. 做錯酒場規則 自己一個</p>
        <p>3. 換人地淮做 自己一個</p>
        <p>4. 估中自己唔淮做的事 全場一個</p>
    </div>
    );
}