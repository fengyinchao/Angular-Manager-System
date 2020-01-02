/*
 * @Description: 菜单配置
 * @Date: 2019-10-19 15:23:19
 * @LastEditors: FYC
 * @Author: FYC
 * @LastEditTime: 2019-10-19 15:23:19
 */

// Support icon by https://ng.ant.design/components/icon/zh

import { Menu } from '@delon/theme';

export const menus: Menu[] = [
  {
    text: '主导航',
    group: true,
    hideInBreadcrumb: true,
    children: [
      {
        text: '系统管理',
        name: 'DEPT',
        link: '/system',
        icon: 'anticon-home',
        children: [
          {
            text: '账号管理',
            name: 'OPERATOR',
            link: '/system/account',
            reuse: false,
          },
          {
            text: '角色管理',
            name: 'RAM_ROLE',
            link: '/system/role',
            reuse: false,
          },
        ],
      },
      {
        text: '社区管理',
        link: '/social',
        name: 'SOCIAL',
        icon: 'anticon-folder',
      },
      {
        text: '房屋管理',
        link: '/house',
        name: 'HOUSES',
        icon: 'anticon-apartment',
        children: [
          {
            text: '户室信息',
            name: 'ROOM',
            link: '/house/usage',
            reuse: false,
          },
          {
            text: '楼栋结构',
            name: 'BUILDING',
            link: '/house/structure',
            reuse: false,
          },
        ],
      },
      {
        text: '住户管理',
        link: '/people',
        name: 'RESIDENT',
        icon: 'anticon-user',
      },
      {
        text: '缴费管理',
        link: '/fee',
        name: 'PAY',
        icon: 'anticon-money-collect',
        children: [
          {
            text: '线下缴费',
            link: '/fee/offline',
            name: 'OFFLINE_PAY',
            reuse: false,
          },
          {
            text: '费用标准管理',
            name: 'PAY_STANDARD',
            link: '/fee/standard',
            reuse: false,
          },
        ],
      },
      {
        text: '公告管理',
        link: '/announce',
        name: 'NOTICE',
        icon: 'anticon-user',
      },
    ],
  },
];
