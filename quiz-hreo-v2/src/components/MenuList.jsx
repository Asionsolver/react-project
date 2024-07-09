/* eslint-disable react/prop-types */
import {
  AppstoreOutlined,
  AreaChartOutlined,
  BarsOutlined,
  HomeOutlined,
  PayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

export const MenuList = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="tasks">
        <Menu.Item key="subtask1">Subtask 1</Menu.Item>
        <Menu.Item key="subtask2">Subtask 2</Menu.Item>
        <Menu.Item key="subtask3">Subtask 3</Menu.Item>
        <Menu.SubMenu key="subtask4" title="Subtask 1">
          <Menu.Item key="subtask5">Subtask 5</Menu.Item>
          <Menu.Item key="subtask6">Subtask 6</Menu.Item>
          <Menu.Item key="subtask7">Subtask 7</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      <Menu.Item key="home" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key="home" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};
