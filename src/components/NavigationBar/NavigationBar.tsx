import { Button, SelectTabData, SelectTabEvent, Tab, TabList } from "@fluentui/react-components";
import { BotSparkle24Regular, CatchUp24Filled, Home24Filled } from "@fluentui/react-icons";
import { FunctionComponent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const aiClick = () => {
    window.location.href = "https://revcngpt404a5bc1-dbc6-9f63-05a8-17ff37e78e9d.azurewebsites.net";
}

export const NavigationBar: FunctionComponent = () => {
    let location = useLocation();
    const [selectedValue, setSelectedValue] = useState(location.pathname);
    const navigate = useNavigate();

    const onTabSelect = (_: SelectTabEvent, data: SelectTabData) => {
        var value = String(data.value);
        setSelectedValue(value);
        navigate(value);
    };

    return (
        <>
            <TabList
                selectedValue={selectedValue}
                onTabSelect={onTabSelect}
                size="large"
            >
                <Tab icon={<Home24Filled />} value="/home">
                    首页
                </Tab>
                <Tab icon={<CatchUp24Filled />} value="/houseMetrics">
                    湖西银座房屋余量
                </Tab>
            </TabList>
            <Button appearance="transparent" icon={<BotSparkle24Regular />} onClick={aiClick}>
                AI助手
            </Button>
        </>
    );
}