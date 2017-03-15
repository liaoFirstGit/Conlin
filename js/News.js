/**
 * Created by ljb on 2017/3/3.
 */
$(document).ready(function(){
    $("#breakingnews2").BreakingNews({
        background		:'#FFF',
        title			:'最新公告',
        titlecolor		:'#FFF',
        titlebgcolor	:'#0075C2',
        linkcolor		:'#333',
        linkhovercolor	:'#0075C2',
        fonttextsize	:16,
        isbold			:false,
        border			:'solid 1px #0075C2',
        width			:'100%',
        timer			:2000,
        autoplay		:true,
        effect			:'slide'

    });
    $("#breakingnews1").BreakingNews({
        background		:'#FFF',
        title			:'最新公告',
        titlecolor		:'#FFF',
        titlebgcolor	:'#0075C2',
        linkcolor		:'#333',
        linkhovercolor	:'#0075C2',
        fonttextsize	:10,
        isbold			:false,
        border			:'none',
        width			:'100%',
        timer			:2000,
        autoplay		:true,
        effect			:'fade'
    });
});