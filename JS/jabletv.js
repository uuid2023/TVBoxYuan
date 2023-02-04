var rule = {
    title:'jabletv',
    host:'https://jable.tv',
    url:'https://jable.tv/new-release',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    class_name:'最新上市',//静态分类名称拼接
    class_url:'new-release',//静态分类标识拼接
    //class_parse:'ul.animenu__nav&&li;a&&Text;a&&href',
    limit:5,
    play_parse:true,
    lazy:'',
    一级:'.row div;.title&&Text;img&&src;.title&&Text;a&&href',
    二级:'*',

}

