function buildLink(members) {
    return "https://teams.microsoft.com/l/chat/0/0?users=" + members.join(',');
}

function addTeamsLinkToProjectPage() {
    if ($('#project').length > 0) {
        $('#project .tab>ul>li').map((i, group) => {
            const members = $(group).find('ul.members>li.member').get().map((m) => $(m).attr('data-member-login'));
            const url = buildLink(members);
            $(group).find('.actions').prepend(`<a class="microsoft-teams" target="_blank" href="${url}"><span><span class="icon" style="background:none;"><img src="https://img.icons8.com/color/48/000000/microsoft-teams.png" style="width: 17px; margin-right: 10px; vertical-align: middle;"></span><span class="label">Teams</span></span></a>`);
        });
    }
}

function addTeamsLinkToSlotPage() {
    if ($('#planify .soutenance').length > 0) {
        $('#planify .soutenance .datagrid table .item.busy td:nth-child(4)').map((i, group) => {
            const members = $(group).find('span[data-login]').get().map((span) => span.textContent);
            const url = buildLink(members);
            $(group).prepend(`<a class="microsoft-teams" target="_blank" href="${url}"><img src="https://img.icons8.com/color/48/000000/microsoft-teams.png" style="width: 17px; margin-right: 10px; vertical-align: middle;"></a>`);
        });
    }
}

$(document).ready(function () {
    // bullshit: looks like page rendering is async
    setTimeout(addTeamsLinkToProjectPage, 1000);
    setTimeout(addTeamsLinkToSlotPage, 1000);
});