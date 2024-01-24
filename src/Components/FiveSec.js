import React, { useState, useEffect } from 'react';

const items = [
  "中藥",
  "銷售員常說的對白",
  "生孩子的理由",
  "與親人聯絡的方法",
  "希臘神祇",
  "跟母親同住好處",
  "讚賞",
  "花錢做的事",
  "薯片口味",
  "童話主角",
  "需要加熱的物品",
  "沙灘才能使用的物品",
  "報章",
  "亞洲國家",
  "保險箱(夾萬) 裡有的東西",
  "地道小食",
  "植物",
  "主題公園有的機動遊戲",
  "外國貨幣"
];

const FiveSec = () => {
  const [count, setCount] = useState(0);
  const [currentItem, setCurrentItem] = useState(items[0]);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
//loop stop when pasted three seconds
//the last item keep showing even timer stop
//show time counter
//random
useEffect(() => {
    if (isTimerRunning) {
      const timer = setTimeout(() => {
        if (count < items.length - 1) {
          setCount(count + 1);
          setCurrentItem(items[count + 1]);
        } else {
          setIsTimerRunning(false);
        }
      }, 2000);
  
      return () => {
        clearTimeout(timer);
        setCount(0);
        setCurrentItem(items[0]);
        setIsTimerRunning(false);
      };
    }
  }, [isTimerRunning, count, items]);
  
  const handleStart = () => {
    setIsTimerRunning(true);
  };

  return (
    <div>
      <button onClick={handleStart} disabled={isTimerRunning}>
        開始
      </button>
      <p>說出三種</p>
      {isTimerRunning && <p>{currentItem}</p>}
    </div>
  );
};

export default FiveSec;