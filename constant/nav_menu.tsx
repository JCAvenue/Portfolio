import {
  HomeOutlined,
  FolderOutlined,
  MessageOutlined,
  TrophyOutlined,
  InfoCircleOutlined,
  ShopOutlined,
} from '@ant-design/icons';

const items = [
  {
    icons: <HomeOutlined style={{ color: '#575555' }} />,
    name: 'Home',
    link: '/'
  },
  {
    icons: <FolderOutlined style={{ color: '#575555' }} />,
    name: 'Projects',
    link: '/projects'
  },
  {
    icons: <TrophyOutlined style={{ color: '#575555' }} />,
    name: 'Experience',
    link: 'experience'
  },
  {
    icons: <ShopOutlined style={{ color: '#575555' }} />,
    name: 'Services',
    link: '/services'
  },
  {
    icons: <InfoCircleOutlined style={{ color: '#575555' }} />,
    name: 'About',
    link: '/about'
  },
  {
    icons: <MessageOutlined style={{ color: '#575555' }} />,
    name: 'Contact',
    link: '/contact'
  },
];

export default items
