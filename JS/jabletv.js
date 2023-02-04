var rule = {
    title:'jabletv',
    host:'https://jable.tv',
    url:'https://jable.tv',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'中文字幕&凌辱強暴',//静态分类名称拼接
    class_url:'categories/chinese-subtitle/&categories/rape/',//静态分类标识拼接
    //class_parse:'ul.animenu__nav&&li;a&&Text;a&&href',
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.row div;.title&&Text;img&&src;.title&&Text;a&&href',
    二级:'*',

}

