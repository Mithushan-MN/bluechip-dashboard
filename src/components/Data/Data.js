
import {
    // UilEstate,
    UilClipboardAlt,
    // UilUsersAlt,
    // UilPackage,
    // UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    // UilignOutAlt
} from '@iconscout/react-unicons';

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'


export const Cardsdata =[
    {
        title: "Sales",
        color: {
            BackGround: 'Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShadow: "8px 8px 10px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name:"Sales",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            BackGround: "Linear-gradient(180deg, #bb67ff, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 80,
        value: "15,970",
        png: UilMoneyWithdrawal,
        series: [
            {
                name:"Revenue",
                data:[31,40,28,51,42,109,100],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            BackGround: "Linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "4,970",
        png: UilClipboardAlt,
        series: [
            {
                name:"Expenses",
                data:[10,25,15,12,42,15,20],
            },
        ],
    },
]

export const UpdatesData = [
    {
        img: img1,
        name: "Mithushan",
        noti: "has ordered Apple smart watch",
        time: "25 mins ago",
    },
    {
        img: img2,
        name: "Mithu",
        noti: "has ordered Apple charger",
        time: "30 mins ago",
    },
    {
        img: img3,
        name: "Thavarsa",
        noti: "has ordered Apple smart watch charger",
        time: "20 mins ago",
    },
]