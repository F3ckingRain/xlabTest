import {IItem, IMenu} from "../Types/MenuItem";

const menuItems:IItem[] = [
    {src: '/', title: 'Главная', type: IMenu.home},
    {src: '/address', title: 'Поиск адресов', type: IMenu.address },
    {src: '/table', title: 'Таблицы', type: IMenu.table },
    {src: '/calendar', title: 'Календарь', type: IMenu.calendar },
    {src: '/maps', title: 'Карты', type: IMenu.maps },
    {src: '/widgets', title: 'Виджеты', type: IMenu.widgets },
    {title: 'Настройки', type: IMenu.settings, includes: true,
        items: [
            {src: '/settingsProfile', title: 'Настройки профиля', type: IMenu.profile},
            {src: '/settingsFinance', title: 'Управление финансами', type: IMenu.finance}
        ]
    },
    {src: '/exit', title: 'Выход', type: IMenu.exit },
]

export default menuItems