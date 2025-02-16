import React, { useEffect, useState } from 'react';

const StarIcon = ({ coinId }) => {


    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {

        if (window.localStorage.coinList) {
            let favList = window.localStorage.coinList.split(",")
            if (favList.includes(coinId)) {
                setIsLiked(true)
            }
        }
    })

    const idChecker = (id) => {
        let favList = null
        if (window.localStorage.coinList) {
            favList = window.localStorage.coinList.split(",")
        }

        if (favList) {
            if (favList.includes(id)) {
                window.localStorage.coinList = favList.filter((coin) => coin !== id)
                setIsLiked(false)
            } else {
                window.localStorage.coinList = [...favList, coinId]
                setIsLiked(true)
            }


        } else {
            window.localStorage.coinList = coinId
            setIsLiked(true)
        }
    }

    return (
        <img
            onClick={() => idChecker(coinId)}
            src={isLiked ? "./assets/star-full.svg" : "./assets/star-empty.svg"} alt="icon-star" />
    );
};

export default StarIcon;