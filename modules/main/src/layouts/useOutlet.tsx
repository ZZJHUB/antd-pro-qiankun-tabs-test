import { MicroAppWithMemoHistory, useLocation, useOutlet as useChildren, useAppData } from '@umijs/max'
import { qiankunConfig } from '@/qiankun-config';

export function useOutlet() {
  const { pathname } = useLocation();

  const children = useChildren();

  const [, moduleName] = pathname.split('/');

  // 如果没有匹配到子模块，就使用主模块的useOutlet
  if (!qiankunConfig.apps.some(app => app.name === moduleName)) {
    return children;
  }

  const { clientRoutes, routes } = useAppData();
  console.log('clientRoutes', clientRoutes)
  console.log('routes', routes)
  const data = {
    userLayout: {
      menuData: {},
      currentRoutes: [{
        path: '/connectxvue/MUserDeptList',
        component: '@/views/user/MUserDeptList.vue'
      }],
    }
  }
  return (

    <MicroAppWithMemoHistory id={pathname} name={moduleName} url={pathname} data={data} />
  )
}
