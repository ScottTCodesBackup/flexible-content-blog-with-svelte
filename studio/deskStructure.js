import S from '@sanity/desk-tool/structure-builder';
import { SiPagekit } from 'react-icons/si';
import { MdPerson, MdSettings } from 'react-icons/md';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Blog posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
      .title('Pages')
      .icon(SiPagekit)
      .child(
        S.editor()
        .id('page')
        .schemaType('page')
        .documentId('page')
      ),
      S.listItem()
      .title('Sitewide')
      .icon(MdSettings)
      .child(
        S.editor()
        .id('siteWide')
        .schemaType('siteWide')
        .documentId('siteWide')
      ),
    ]);
