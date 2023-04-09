import { RouteRecordRaw } from 'vue-router';
import pageConfig from '../pageConfig.json';
import axios from 'axios';

const DefaultPage = () => import('@/views/DefaultPage.vue');

interface BreadCrumb {
  name: string;
  path: string;
}

interface Node {
  route: string;
  name: string;
  description: string;
  icon: string;
  bgColor: string;
  owner: string;
  tags: string[];
  children?: Node[];
  path?: string;
  breadCrumb?: BreadCrumb[];
  markdown?: string;
  component?: any;
  meta?: any;
  redirect?: string;
}

const metaMap: { [key: string]: any } = {};

/**
 * processElement - recursively walk through a given node and enrich it with some additional
 * properties
 */
 function processElement(node: Node, parent: Node | null) {

  node.path = node.route;
  if (!parent) {
    node.breadCrumb = [];
  } else {
    node.breadCrumb = JSON.parse(JSON.stringify(parent.breadCrumb));
  }

  const parentPath = parent != null ? parent.path + node.route : '/';

  if (!node.breadCrumb) {
    node.breadCrumb = [];
  }

  node.breadCrumb.push({
    name: node.name,
    path: parentPath,
  });

  node.component = DefaultPage;
  if (parent != null) node.path = parent.path + node.route;

  const tiles: any[] = [];
  if (node.children) {
    for (const i in node.children) {
      const child = node.children[i];
      tiles.push({
        name: child.name,
        description: child.description,
        path: node.path + child.route,
        icon: child.icon,
        bgColor: child.bgColor,
        owner: child.owner,
        tags: child.tags,
      });
      processElement(child, node);
    }
  }

  node.meta = {
    tiles: tiles.length > 0 ? tiles : null,
    name: node.name,
    description: node.description,
    markdown: node.markdown,
    icon: node.icon,
    bgColor: node.bgColor,
    owner: node.owner,
    tags: node.tags,
    breadCrumb: node.breadCrumb,
  };

  metaMap[node.path] = node.meta;
}

function generateRoutingConfig(baseConfig: any) {
  const pages = JSON.parse(JSON.stringify(baseConfig.pages))

  for (const i in pages) {
    const element = pages[i];
    if ('route' in element) {
      console.log(element)
      processElement(element, null);
    }
  }

  pages.push({
    path: '/',
    redirect: baseConfig.landingPage,
  });

  return pages;
}

export default {
  getMetaById(route: string) {
    return metaMap[route];
  },

  getRoutingConfig(): RouteRecordRaw[] {
    const routingConfig = generateRoutingConfig(this.getBaseConfig());
  
    return routingConfig;
  },

  getBaseConfig() {
    return pageConfig;
  },

  getPages() {
    return this.getBaseConfig().pages;
  },

  getStatus() {
    return new Promise((resolve, reject) => {
      const pathName = window.location.pathname;
      const path = `${pathName.substring(0, pathName.length - 1)}/static/content.json`;

      axios
        .get(path)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          return reject(error);
        });
    });
  },
};
