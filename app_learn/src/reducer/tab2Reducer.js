/**
 * Created by ls-mac on 2017/5/8.
 */

let initialState = {
    isRefreshing:true,
    isLoadingMore:0,
    pageNo:1,
    total:-1,
    datas:[]
}

import * as actionTypes from './../constants/actionTypes'
export default function tab2Reducer(state = initialState,action) {
    let newState = state;
    switch (action.type){
        case actionTypes.tab_receiveData: {
            let datas = action.datas.productNormalList;

            if(action.pageNo==1){
                newState = Object.assign({}, state, {
                    datas: datas,
                });
            }else {
                newState = Object.assign({}, state, {
                    datas: state.datas.concat(datas),
                });
            }
            newState.pageNo = ++action.pageNo;
            return newState;
        }
        case actionTypes.tab_refresh :{
            newState = Object.assign({}, state, {
                isRefreshing: action.isRefreshing
            });
            return newState;
        }
        case actionTypes.tab_loading :{
            newState = Object.assign({}, state, {
                isLoadingMore: action.isLoadingMore
            });
            return newState;
        }
        default:
            return initialState;
    }
}