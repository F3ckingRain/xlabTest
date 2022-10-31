
export enum IMenu {
    'home'= 'home',
    'address' = 'address',
    'table' = 'table',
    'calendar' = 'calendar',
    'maps' = 'maps',
    'widgets' = 'widgets',
    'settings' = 'settings',
    'exit' = 'exit',
    'profile' = 'profile',
    'finance' = 'finance'
}

export type IItem = {
    src?: string,
    title: string,
    type: IMenu,
    includes?: boolean,
    items?: IItem[]
}