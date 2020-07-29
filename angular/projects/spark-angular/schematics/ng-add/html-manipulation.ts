import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { DefaultTreeDocument, DefaultTreeElement, parse as parseHtml } from 'parse5';

/** Finds an element by its tag name. */
const getElementByTagName = (tagName: string, htmlContent: string): DefaultTreeElement | null => {
  const document = parseHtml(htmlContent, { sourceCodeLocationInfo: true }) as DefaultTreeDocument;
  const nodeQueue = [...document.childNodes];

  while (nodeQueue.length) {
    const node = nodeQueue.shift() as DefaultTreeElement;

    if (node.nodeName.toLowerCase() === tagName) {
      return node;
    } else if (node.childNodes) {
      nodeQueue.push(...node.childNodes);
    }
  }

  return null;
};

/** Adds a class to the html of the document. */
export const addHtmlClass = (host: Tree, htmlFilePath: string, className: string): void => {
  const htmlFileBuffer = host.read(htmlFilePath);

  if (!htmlFileBuffer) {
    throw new SchematicsException(`Could not read file for path: ${htmlFilePath}`);
  }

  const htmlContent = htmlFileBuffer.toString();
  const html = getElementByTagName('html', htmlContent);

  if (!html) {
    throw Error(`Could not find <html> element in HTML file: ${htmlFileBuffer}`);
  }

  const classAttribute = html.attrs.find((attribute) => attribute.name === 'class');

  if (html.sourceCodeLocation) {
    if (classAttribute) {
      const hasClass = classAttribute.value.split(' ').map((part) => part.trim()).includes(className);

      if (!hasClass) {
        const classAttributeLocation = html.sourceCodeLocation.attrs.class;
        const recordedChange = host
          .beginUpdate(htmlFilePath)
          .insertRight(classAttributeLocation.endOffset - 1, ` ${className}`);
        host.commitUpdate(recordedChange);
      }
    } else {
      const recordedChange = host
        .beginUpdate(htmlFilePath)
        .insertRight(html.sourceCodeLocation.startTag.endOffset - 1, ` class="${className}"`);
      host.commitUpdate(recordedChange);
    }
  }
};
