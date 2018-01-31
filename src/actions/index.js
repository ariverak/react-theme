export function changePage(pageId){
    return {
        type : 'CHANGE_PAGE',
        payload : {
            currentPage : pageId
        }
     }
}