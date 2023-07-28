import { Tab, TabList } from "@fluentui/react-components";
import { BotSparkle24Filled, CatchUp24Filled, Home24Filled } from "@fluentui/react-icons";
import { FunctionComponent, useState } from "react";

export const NavigationBar: FunctionComponent = () => {
    const [selectedValue, setSelectedValue] = useState("home");

    return (
        <TabList
            selectedValue={selectedValue}
            onTabSelect={(_, data) => setSelectedValue(String(data.value))}
            size="large"
        >
            <Tab icon={<Home24Filled />} value="home">
                首页
            </Tab>
            <Tab icon={<CatchUp24Filled />} value="houseMetrics">
                湖西银座房屋余量
            </Tab>
            <Tab icon={<BotSparkle24Filled />} value="aiAssitant" disabled>
                AI助手（敬请期待）
            </Tab>
        </TabList>
    );
}