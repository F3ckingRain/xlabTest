
export type IRoute = {
    src : string,
    exact: string,
    element: () => JSX.Element
}