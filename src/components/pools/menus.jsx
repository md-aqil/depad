import { Menu } from "antd";

export default function Menus() {
    return (
        <Menu>
            <Menu.Item>All</Menu.Item>
            <Menu.Item>Started</Menu.Item>
            <Menu.Item>Ended</Menu.Item>
            <Menu.Item>Certified</Menu.Item>
            <Menu.Item>Voting</Menu.Item>
            <Menu.Item>Filled</Menu.Item>
            <Menu.Item>Not filled</Menu.Item>
            <Menu.Item>Cancelled</Menu.Item>
        </Menu>
    );
}
