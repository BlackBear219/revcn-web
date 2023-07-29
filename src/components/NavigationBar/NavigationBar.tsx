import { SelectTabData, SelectTabEvent, Tab, TabList } from "@fluentui/react-components";
import { BotSparkle24Filled, CatchUp24Filled, Home24Filled } from "@fluentui/react-icons";
import { FunctionComponent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
            <Tab icon={<BotSparkle24Filled />} value="/aiAssitant" disabled>
                AI助手（敬请期待）
            </Tab>
        </TabList>
    );
}