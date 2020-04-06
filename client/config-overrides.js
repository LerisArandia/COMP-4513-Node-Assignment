const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#f72767',
            '@info-color': '@primary-color',
            '@link-color': '#1890ff',
            '@font-size-base': '14px',
            '@text-color': '#262626',
            '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
            '@warning-color': '#faad14',
            '@error-color': '#f5222d',
            '@body-background': '#fff0f1',
            //'@component-background': '#fff0f2',
            '@font-family':"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'"
        },
    }),
)