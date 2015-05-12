/*
    name : react fis config
    date : 2015.4.8
    author: liuhao18@baidu.com
*/
fis.config.set('pack', {
    // 'js/index.js': [
    //     '/static/js/**.js',
    //     '/components/**/**.jsx'
    // ],
    'css/index.css': [
        '/static/**.less',
        '/components/**.less'
    ]
});


/*
 *   插件名: fis-postpackager-simple
 *   功能: 插件提供的静态资源打包合并的功能
 */
fis.config.set('modules.postpackager', 'simple');


/*
 *   插件名: fis-parser-react
 *   功能: fis编译*.jsx文件
 */
fis.config.set('project.fileType.text', 'jsx'); //*.jsx files are text file.
fis.config.set('modules.parser.jsx', 'react'); //compile *.jsx with fis-parser-react plugin
fis.config.set('roadmap.ext.jsx', 'js'); //*.jsx are exactly treat as *.js


/*
 *   插件名: fis-parser-less
 *   功能: fis编译*.less文件
 */
fis.config.set('modules.parser.less', 'less');
fis.config.set('roadmap.ext.less', 'css');
