/* eslint-disable react/prop-types */

import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export const ToggleThemeButton = ({darkTheme, toggleTheme}) => {
  return (
    <div className="toggle-theme-btn">
        <Button onClick={toggleTheme}>
            {darkTheme ?<SunOutlined /> : <MoonOutlined />}
        </Button>
    </div>
  )
}
