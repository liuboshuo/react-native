/**
 * Created by ls-mac on 2017/5/8.
 */
import * as actionTypes from './../constants/actionTypes'
import HttpTool from './../common/httpTool'

export function loadData(pageNo = 1) {
    return dispatch => {
        if(pageNo == 1){
            dispatch(changeRefreshState(true));
        }else {
            dispatch(changeLoadState(1));
        }
        console.log(pageNo)
        HttpTool.post("https://m.alibaba.com/products/bottle/" + pageNo + ".html?XPJAX=1")
            .then((response)=>{
                dispatch(receiveData(response,pageNo));
                if (pageNo == 1){
                    dispatch(changeRefreshState(false));
                }
                let total = response.pagination.total;
                if (pageNo >= total){
                        //加载完成
                    dispatch(changeLoadState(2));
                }else{
                        //未加载完成
                    dispatch(changeLoadState(0));
                }
            }).catch(function (error) {
            //结束刷新
            dispatch(changeRefreshState(false));
            dispatch(changeLoadState(0));
        });
    }
}
export function changeRefreshState(isRefreshing) {

    return {type:actionTypes.tab_refresh,isRefreshing:isRefreshing}

}

export function receiveData(datas,pageNo) {

    return {type:actionTypes.tab_receiveData,datas:datas,pageNo:pageNo}

}

export function changeLoadState(isLoadingMore){

    return {type:actionTypes.tab_loading,isLoadingMore:isLoadingMore}

}

export function reset() {
    return {type:actionTypes.tab_resetDefault}
}