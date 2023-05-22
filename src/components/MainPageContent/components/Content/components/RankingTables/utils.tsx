import { Img } from './styles';

export const driverColumns = [
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position'
  },
  {
    title: 'Driver Name',
    dataIndex: 'driverName',
    key: 'driverName'
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points'
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (src: string) => <Img src={src} loading="lazy" />
  }
];

export const teamColumns = [
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position'
  },
  {
    title: 'Team Name',
    dataIndex: 'teamName',
    key: 'teamName'
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points'
  },
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
    render: (src: string) => <Img src={src} loading="lazy" />
  }
];
