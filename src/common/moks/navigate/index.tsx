import {
  HomeOutlined,
  AutoGraphOutlined,
  MenuBookOutlined,
  SettingsOutlined,
  AddCircleOutlineOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material';

export const navMenuUser = [
  {
    name: 'Главная',
    icon: <HomeOutlined />,
    path: '/',
    id: 1
  },
  {
    name: 'Избраное',
    icon: <AutoGraphOutlined />,
    path: '/watchlist',
    id: 2
  },
  {
    name: 'Новости',
    icon: <MenuBookOutlined />,
    path: '/news',
    id: 3
  },
  {
    name: 'Настройки',
    icon: <SettingsOutlined />,
    path: '/settings',
    id: 4
  },
]

export const navMenuAdmin = [
  {
    name: 'Главная',
    icon: <HomeOutlined />,
    path: '/',
    id: 1
  },
  {
    name: 'Добавить товар',
    icon: <AddCircleOutlineOutlined />,
    path: 'add-product/ADD',
    id: 6
  },
  {
    name: 'Все товары',
    icon: <TrendingUpOutlined />,
    path: 'all-products',
    id: 5
  },
  {
    name: 'Избранное',
    icon: <AutoGraphOutlined />,
    path: '/watchlist',
    id: 2
  },
  {
    name: 'Новости',
    icon: <MenuBookOutlined />,
    path: '/news',
    id: 3
  },
  {
    name: 'Настройки',
    icon: <SettingsOutlined />,
    path: '/settings',
    id: 4
  },
];