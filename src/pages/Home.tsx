import { ConfigProvider, Select } from 'antd';
import { FC, useEffect, useState } from 'react';

// TODO 将tailwind和antd的颜色统一起来
const themes = {
  default: {
    primaryColor: '#ff0000',
  },
  dark: {
    primaryColor: '#00ff00',
  },
  tiger: {
    primaryColor: '#0000ff',
  },
};

const Home: FC = () => {
  const [theme, setTheme] = useState<'default' | 'dark' | 'tiger'>('default');

  useEffect(() => {
    const classList = document.documentElement.classList;
    classList.remove(...classList);
    if (theme !== 'default') {
      classList.add(theme);
    }
  }, [theme]);

  ConfigProvider.config({
    theme: themes[theme],
  });

  return (
    <div className={`bg-base-400/80 h-full flex justify-center items-center`}>
      <ConfigProvider>
        <Select value={theme} onChange={(v) => setTheme(v)} style={{ width: 100 }}>
          <Select.Option value="default">default</Select.Option>
          <Select.Option value="dark">dark</Select.Option>
          <Select.Option value="tiger">tiger</Select.Option>
        </Select>
      </ConfigProvider>
    </div>
  );
};

export default Home;
