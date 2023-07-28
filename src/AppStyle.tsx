import { makeStyles } from "@fluentui/react-components";

const navigationBarHeight = "60px";
const rowGap = "10px";

export const useStyles = makeStyles({
    root: {
        width: "calc(100vw - 30px)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        rowGap: rowGap,
    },
    navigationBar: {
        height: navigationBarHeight,
        display: "flex",
    },
    page: {
        height: `calc(100vh - ${navigationBarHeight} - ${rowGap})`,
        backgroundColor: "grey"
    },
});