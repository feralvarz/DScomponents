module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name:',
      },
    ],
    actions: (data) => {
      const componentName = '{{pascalCase componentName}}';
      const pathName = `src/components/${componentName}/${componentName}`;

      const actions = [
        '',
        'Added new Component 🎉🎉',
        '',
        {
          type: 'add',
          path: `${pathName}.tsx`,
          templateFile: 'plop-templates/component/component-template.hbs',
        },
        {
          type: 'add',
          path: `${pathName}.styles.ts`,
          templateFile: 'plop-templates/component/styles-template.hbs',
        },
        {
          type: 'add',
          path: `${pathName}.types.ts`,
          templateFile: 'plop-templates/component/types-template.hbs',
        },
        {
          type: 'add',
          path: `${pathName}.stories.tsx`,
          templateFile: 'plop-templates/component/story-template.hbs',
        },
      ];

      return actions;
    },
  });
};
