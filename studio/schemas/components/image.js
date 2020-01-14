import removeIcon from '../removeIcon';

export default {
  name: 'imageComponent',
  type: 'object',
  title: 'Image',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule
        .required()
    }
  ],
  preview: {
    prepare() {
      return {
        // This below string is what will appear in the 
        title: 'Image',
        media: removeIcon()
      }
    }
  }
}
