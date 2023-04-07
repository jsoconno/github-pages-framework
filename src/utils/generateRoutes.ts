interface MarkdownFile {
  route: string;
  name: string;
  icon: string | null;
  tags: string[];
  markdown: string;
}

interface Folder {
  [key: string]: string | Folder;
}

export default function useNestedMarkdownFiles() {
  const getNestedMarkdownFiles = (folder: Folder): MarkdownFile[] => {
    const result: MarkdownFile[] = [];
    const traverse = (currentFolder: Folder, currentPath = '') => {
      const entries = Object.entries(currentFolder);

      for (const [name, value] of entries) {
        if (typeof value === 'object') {
          traverse(value as Folder, currentPath + name + '/');
        } else {
          const routePath = currentPath + name.replace(/\.md$/, '');
          const properCaseName = name
            .replace(/\.md$/, '')
            .replace(/-/g, ' ')
            .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
          const iconMatch = (value as string).match(/icon:\s*["'](.+?)["']/);
          const tagsMatch = (value as string).match(/tags:\s*\[(.+?)\]/);
          const icon = iconMatch ? iconMatch[1] : null;
          const tags = tagsMatch
            ? tagsMatch[1]
                .split(',')
                .map((t) => t.trim().replace(/["']/g, ''))
            : [];

          result.push({
            route: routePath,
            name: properCaseName,
            icon,
            tags,
            markdown: `/static/markdown${currentPath}${name}`,
          });
        }
      }
    };

    traverse(folder);
    return result;
  };

  return {
    getNestedMarkdownFiles,
  };
}
